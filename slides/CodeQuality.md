title: Code Quality Seminar
author:
  name: Icer, Liang (EID:E585909)
  url: http://www.icerdesign.com
output: CodeQuality.html
controls: true

--

# Code Quality
## Life of Programmer

--

# What is our manifesto?
## There are some discussions already

--
## S.O.L.I.D
* The Single Responsibility Principle 
* The Open Closed Principle
* The Liskov Substitution Principle
* The Interface Segregation Principle
* The Dependency Inversion Principle

--
## Sommerville's
* maintainability.
* dependability.
* efficiency.
* usability.

--

## Weinberg's
* Does a program meet its specification; "correct output for each possible input"?.
* Is the program produced on schedule (and within budget)?
* How adaptable is the program to cope with changing requirements?
* Is the program efficient enough for the environment in which it is used?

--

## Hoare's #1
* Clear definition of purpose.
* Simplicity of use.
* Ruggedness (difficult to misuse, kind to errors).
* Early availability (delivered on time when needed).
* Reliability.

--

## Hoare's #2
* Extensibility in the light of experience.
* Brevity.
* Efficiency (fast enough for the purpose to which it is put).
* Minimum cost to develop.
* Conformity to any relevant standards.
* Clear, accurate, and precise user documents.

--

# What is ours
## for the RTU2020

--

### Auto-Detect Indication

* Warnings: `0`
* Unit Tests: `All Passed`
* StyleCop: `0`
* Simian: `0`
* OpenTask: `0`
* Code Coverage: `50`

--

### Readability 

* No long method(no more than `80` lines) 
* No deep level nested in method(no more than `4` levels) 
* No long file(no more than `1000` lines)

--

### Log 
* Log detail as `Debug` level 
* Log main step/input/output as `Info` level 
* Log expected situation which should not occur in normal scenario as `Warn` level 
* Log unexpected situation which would not break user from using as `Error` level 
* log other situation as `Fatal` level 
* When we collected log file, all warn/error/fatal should be carefully exam and take corresponding action to reduce 

--

### Error handling
* Never eat up generic `Exception`, at least throw it or log it. 
* Use dedicated `Exception` as much as possible. 
* Every new `thread` should have full-functional error handling mechanism. 
* The UI level should handle all exception, and give user corresponding prompt and suggestion. 

--

### Packaging 
* `seal` class
* Use `internal`
* Less public/internal
* Use auto property

--

### Business Relative
* `DO NOT` save unnecessary information into file
* Use AppConfig as much as possible instead of hard-code parameter
* Remove no longer used code before you checked in, otherwise put some comments to it why it should remain here.
* Move your text which will let user see to the `Localization` resource

--

## Documentation

* Document key method or complex method
* It's better that code is the document

--

# Develop Your Own

--

# Question?

--

# Thanks!

[Best Coding Practices]: http://en.wikipedia.org/wiki/Best_coding_practices
