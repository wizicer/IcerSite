---
title: "Use Roslyn to generate semantic code"
ref: "Use Roslyn to generate semantic code"
date: 2016-6-12
lang: en
category: C#
---

Scenario: I have made some utilities to generate C# code, however, I just utilize literal string
with string.format, which is not good enough after Roslyn come out. So I tried to generate semantic
code using Roslyn.

<!--more-->

Step 1. Tried Code from [this link](http://stackoverflow.com/a/27856370/2558077),
however, there is a error:

```
Error	CS0246	The type or namespace name 'CustomWorkspace' could not be found
```

According to [this link](https://github.com/dotnet/roslyn/issues/2614) modify code as follow:
```diff
- var cw = new CustomWorkspace();
+ var cw = new AdhocWorkspace();
```

Another type `Formatter` cannot be found which resolve by importing `Microsoft.CodeAnalysis.CSharp.Workspaces`.

Credit to [this link](https://github.com/dotnet/roslyn/tree/master/src/Workspaces/CSharp/Portable/Formatting)

Finally the first working code look like this (with little refactoring):

```cs
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Formatting;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Formatting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Microsoft.CodeAnalysis.CSharp.SyntaxFactory;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            var consoleWriteLine = MemberAccessExpression(SyntaxKind.SimpleMemberAccessExpression, IdentifierName("Console"), name: IdentifierName("WriteLine"));

            var arguments = ArgumentList(
                SeparatedList(
                    new[]
                    {
                        Argument(LiteralExpression(SyntaxKind.StringLiteralExpression, Literal(@"""Goodbye everyone!""", "Goodbye everyone!")))
                    }));

            var consoleWriteLineStatement = ExpressionStatement(InvocationExpression(consoleWriteLine, arguments));

            var voidType = PredefinedType(Token(SyntaxKind.VoidKeyword));

            var intType = PredefinedType(Token(SyntaxKind.IntKeyword));
            var getterBody = ReturnStatement(DefaultExpression(intType));
            var getter = AccessorDeclaration(SyntaxKind.GetAccessorDeclaration, Block(getterBody));

            var @class = ClassDeclaration("MyClass")
                .AddMembers(MethodDeclaration(voidType, "Method")
                    .WithBody(Block(consoleWriteLineStatement)))
                .AddMembers(PropertyDeclaration(intType, "Property")
                    .WithAccessorList(AccessorList(SingletonList(getter))));

            // generate code
            var cw = new AdhocWorkspace();
            cw.Options.WithChangedOption(CSharpFormattingOptions.IndentBraces, true);
            var formattedCode = Formatter.Format(@class, cw);

            Console.WriteLine(formattedCode.ToFullString());
        }
    }

}
```

It's really verbose, if I convert my generator code to something like this, the visibility and
maintainability must be dropped so much that I cannot afford. Here is a very great
[article](http://blog.comealive.io/Syntax-Factory-Vs-Parse-Text/) compared Roslyn Syntaxfactory with
ParseText. For TL;DRs, here is the conclusion:

> * When convenience and ease of maintenance is relatively most important, use ParseText
> * To be certain about the generated tree structure - use SyntaxFactory
> * To generate just one expression - SyntaxFactory for precision and correct type, and because
>   ParseText may have too little context to identify tokens and nodes in an isolated line of code.
>   SyntaxFactory.ParseExpression may also be used to parse an individual line of code.
> * To interpret arbitrary C# file - use ParseText
> * To interpret arbitrary string and build just one expression - use SyntaxFactory.ParseExpression or
>   use ParseText with CSharpParseOptions.WithKind(SourceCodeKind.Script).

For my case, I choose to use ParseText.
