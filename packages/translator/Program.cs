using Azure;
using Azure.AI.Translation.Text;

Uri endpoint = new("https://api.cognitive.microsofttranslator.com/");
string key = "";
string region = "japaneast";

AzureKeyCredential credential = new(key);
TextTranslationClient client = new(credential, region);

//var sourceDir = "../../content/zh/";
//var targetDir = "../../content/en/";
var sourceDir = "../../../../../content/zh/";
var targetDir = "../../../../../content/en/";

var includedPattern = new[] { "/zh/posts", "/zh/projects" };

var targetFiles = Directory.GetFiles(targetDir, "*.md", SearchOption.AllDirectories);

var sourceFiles = Directory.GetFiles(sourceDir, "*.md", SearchOption.AllDirectories)
    .Where(_ => includedPattern.Any(p => _.IndexOf(p) >= 0))
    .Where(_ => !targetFiles.Any(t => _ == t.Replace("/en/", "/zh/")))
    .ToArray();

//var rawposts = sourceFiles
//    .Select(File.ReadAllText)
//    .ToArray();

var posts = sourceFiles
    //.Select(md => new { front = md.GetFrontMatter(), body = md.GetBody() })
    .Select(MarkdownExtensions.Parse)
    .ToArray();

for (int i = 0; i < posts.Length; i++)
{
    var post = posts[i];
    var fm = post.frontmatter ?? new Dictionary<object, object>();
    if (fm.ContainsKey("title"))
    {
        var title = fm["title"] as string;
        if (!string.IsNullOrEmpty(title))
        {
            title = await Translate(title);
            if (!string.IsNullOrEmpty(title))
            {
                fm["title"] = title;
            }
        }
    }
    fm.TryAdd("lang", "en");
    fm.TryAdd("translateDate", DateTime.Now.ToShortDateString());
    var body = await Translate(post.body);
    if (string.IsNullOrEmpty(body)) continue;

    var record = new MarkdownParseRecord(post.filepath, fm, body);
    var content = record.Combine();
    var fi = new FileInfo(post.filepath.Replace("/zh/", "/en/"));
    if (!fi.Directory!.Exists) fi.Directory.Create();
    await File.WriteAllTextAsync(fi.FullName, content);
    await Task.Delay(1000);
}

Console.WriteLine("All processed");

async Task<string?> TranslateMock(string input, string targetLanguage = "en")
{
    return $"{targetLanguage}:{input}";
}

async Task<string?> Translate(string input, string targetLanguage = "en")
{
    try
    {
        var response = await client.TranslateAsync(targetLanguage, input).ConfigureAwait(false);
        var translations = response.Value;
        var translation = translations.FirstOrDefault();

        Console.WriteLine($"Detected languages of the input text: {translation?.DetectedLanguage?.Language} with score: {translation?.DetectedLanguage?.Score}.");
        Console.WriteLine($"Text was translated to: '{translation?.Translations?.FirstOrDefault().To}' and the result is: '{translation?.Translations?.FirstOrDefault()?.Text}'.");
        return translation?.Translations?.FirstOrDefault()?.Text;
    }
    catch (RequestFailedException exception)
    {
        Console.WriteLine($"Error Code: {exception.ErrorCode}");
        Console.WriteLine($"Message: {exception.Message}");
        throw;
    }
}
