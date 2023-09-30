using Markdig;
using Markdig.Extensions.Yaml;
using Markdig.Syntax;
using YamlDotNet.Serialization;
using YamlDotNet.Serialization.NamingConventions;

public static class MarkdownExtensions
{
    private static readonly IDeserializer YamlDeserializer =
        new DeserializerBuilder()
        .IgnoreUnmatchedProperties()
        .Build();

    private static readonly MarkdownPipeline Pipeline
        = new MarkdownPipelineBuilder()
        .UseYamlFrontMatter()
        .Build();

    public static object? GetFrontMatter(this string markdown)
    {
        var document = Markdown.Parse(markdown, Pipeline);

        var block = document
            .Descendants<YamlFrontMatterBlock>()
            .FirstOrDefault();

        if (block == null)
            return default;

        var yaml =
            block
            // this is not a mistake
            // we have to call .Lines 2x
            .Lines // StringLineGroup[]
            .Lines // StringLine[]
            .Reverse()
            .Select(x => x.ToString())
            .Where(x => !string.IsNullOrWhiteSpace(x))
            .Aggregate("", (s, agg) => $"{agg}\n{s}");

        return YamlDeserializer.Deserialize(yaml);
    }

    public static string GetBody(this string markdown)
    {
        var lines = markdown
            .Split('\n')
            .Select(_ => _.TrimEnd('\r'))
            .ToArray();
        var ls = lines
            .Select((_, i) => _ == "---" ? i : (int?)null)
            .Where(_ => _ != null)
            .ToArray()
            ;

        if (ls.Length >= 2)
        {
            return string.Join(Environment.NewLine, lines.Skip((ls[1] ?? -1) + 1));
        }

        return markdown;
    }

    public static MarkdownParseRecord Parse(this string filepath)
    {
        var markdown = File.ReadAllText(filepath);
        return new MarkdownParseRecord(filepath, markdown.GetFrontMatter() as Dictionary<object, object>, markdown.GetBody());
    }

    public static string Combine(this MarkdownParseRecord record)
    {
        var serializer = new SerializerBuilder()
            .WithNamingConvention(CamelCaseNamingConvention.Instance)
            .Build();

        var yaml = record.frontmatter == null ? null : serializer.Serialize(record.frontmatter);
        if (yaml == null)
        {
            return record.body;
        }
        else
        {
            return $@"---
{yaml.Trim()}
---
{record.body}";
        }
    }
}

public record MarkdownParseRecord(string filepath, Dictionary<object, object>? frontmatter, string body);