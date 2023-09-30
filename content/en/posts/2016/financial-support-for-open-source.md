---
title: A practical manual for making money on open source projects
tags:
- 杂文
- 微信
categories:
- 冰河杂谈
date: 2016-06-26
lang: en
translateDate: 9/30/2023
---

This article is open source at <https://github.com/wizicer/FinancialSupportForOpenSource>
* "I'm working on an open source project, but how do I make money?" "*

I've listed the stories of people I know from a variety of sources who generate revenue from open source projects, with a series of real-life examples for each funding type, roughly ranked from smallest to largest. (I've tried to point to specific stories rather than the main page whenever possible.)

The types of funding in this article are not mutually exclusive, for example, a project can be raised by either a foundation or through crowdfunding, while a person can earn money from both consulting and donations. The main purpose of this article is to provide an exhaustive list of ways to earn money, and you just need to choose the one that suits you.

This Chinese version is a translation of [Original] (https://github.com/nayafia/lemonade-stand).

The original project name, Lemonade Stand, referred to a stall selling lemon juice, which in the United States was usually run by children.

---

# Table of Contents

1. [Donate button] (#捐赠按钮)
2. [Bounty] (#悬赏)
3. [Crowdfunding (one-off)] (#众筹 (one-off))
4. [Crowdfunding (sustained)] (#众筹 (persistent))
5. [Selling books and peripherals] (#卖书及周边)
6. [Advertisement] (#广告)
7. [Be employed by the company and continue your project] (#受雇于公司并继续你的项目)
8. [Start a project while working] (#在职时启动项目)
9. [Subsidy] (#补贴)
10. [Advisory Services] (#咨询服务)
11. [SaaS](#saas)
12. [Dual Agreements] (#双重协议)
13. [Open Core] (#开放核心)
14. [Foundation] (#基金会)
15. [Venture Capital] (#风险投资)

Appendix: [Contribution](#贡献) // [Agreement](#协议)

**"Individual effort" is used to mark that the funds were raised by individuals rather than projects**

## Donate button

Put a donate button on your website page. Stripe and PayPal can easily provide this service.

#### Pros

* Few restrictions
* Small workload: you can leave it alone after putting it away

#### Cons

* Unless you work hard to raise money, you usually don't have much money
* A legal entity is required to accept donations ([SFC](http://sfconservancy.org), [OpenCollective](http://opencollective.com) can help in this regard), making it difficult to manage an individual's international donation
* It is difficult to figure out how this donation will be distributed in a multi-person project

#### Case study

* [Twisted](https://twistedmatrix.com/trac/wiki/WhyDonate)
* [Git](https://git-scm.com/sfc)
* [Transmission](https://www.transmissionbt.com/)

## Bounty

From time to time, projects or companies may post bounty jobs for open source projects (e.g., "fix bugs to earn $100"), and here are some websites that collect and publish such bounty jobs.

#### Pros

* Participate in the open source community
* Determined work has a definite return
* Especially popular in fixing security vulnerabilities

#### Cons

* It will generate unreasonable incentives in the project (low-quality PR will also affect the focus of the project)
* Usually not much money (~&lt;$500)
* Inability to provide lasting income

#### Case study

* [Bountysource](http://bountysource.com)
* [GitHub Bug Bounty Program](https://bounty.github.com/)

## Crowdfunding (one-off)

If you want to realize a particular idea (as distinct from a long-term project), a one-off crowdfunding campaign can help you raise the funds you need, and many individuals and companies may donate to your idea.

#### Pros

* Few restrictions
* It can also be easily and legally done by individuals, such as through [Kickstarter] (https://kickstarter.com/)

#### Cons

* A whole lot of marketing work needs to be done
* Often, it is necessary to provide rewards and even privileges to the donor
* Usually not that much money (about $50K at a time)
* Companies are not often willing to donate to crowdfunding

#### Case study

* [Michal Papis + RVM (individual effort)] (https://www.bountysource.com/teams/rvm/fundraiser)
* [Andrew Godwin + Django (Individual Effort)] (https://www.kickstarter.com/projects/andrewgodwin/schema-migrations-for-django)
* [ribasushi + CPAN (individual effort)] (https://www.tilt.com/tilts/year-of-ribasushi-help-him-focus-on-cpan-for-2016)
* [RESTful WP-CLI](https://www.kickstarter.com/projects/danielbachhuber/a-more-restful-wp-cli)

## Crowdfunding (Sustained)

If you want to raise money for a sustainable project, set up an ongoing crowdfunding where donors commit to monthly or annual funding until the donor withdraws. For those individuals or companies that regularly use your project, they may be willing to fund your project.

#### Pros

* Few restrictions
* It can also be easily and legally done by individuals, such as through [Patreon](https://patreon.com), [Salt](https://salt.bountysource.com/), [Gratipay](https://gratipay.com/), [OpenCollective]( https://opencollective.com)

#### Cons

* It is difficult to obtain a committed ongoing donation (this usually requires you or the project to already have a certain reputation)
* It is difficult to explain what kind of clear rewards or privileges are available for ongoing giving
* Usually not that much money ($1-4K a month)

#### Case study

* [MochaJS](https://opencollective.com/mochajs)
* [React-boilerplate](https://opencollective.com/react-boilerplate)
* [jsbin](https://gratipay.com/jsbin/)
* [Tom Christie + Django REST framework (personal effort)](https://fund.django-rest-framework.org/topics/funding/)
* [Ruby Together](https://rubytogether.org)

## Sell books and peripherals

If you're an expert in a field, you can write and sell books, find a publisher (like O'Reilly) or publish it yourself. In addition to selling books, some items also sell short-sleeved jackets.

#### Pros

* The funds raised are not tied to the management of the project itself, so the project itself can maintain creative freedom
* The product itself can also be used as a promotion for the project
* Can be a continuous source of funding after the initial sale

#### Cons

* Usually not so much money either
* Affects the energy spent on the project
* Advance funds are required to sell peripherals

#### Case study

* [Lua](https://www.lua.org/pil/)
[Daniel and Audrey Roy Greenfeld + Two Scoops of Django (personal effort)] (https://www.twoscoopspress.com/products/two-scoops-of-django-1-8)
* [Sandi Metz + Practical Object-Oriented Design in Ruby (Personal Effort)] (http://www.poodr.com/)

## Advertising

If your project already has an audience, you can help advertisers market to your audience. Usually your project will have a clear audience, which is your advantage and advertisers like. (For example, if you have a Python project, then you can basically assume that your audience must be technically familiar with Python)

#### Advantages

* This is a mature and well-defined business model that is acceptable to the public

#### Cons

* Requires a large enough audience to bring in advertisers
* You need to be transparent to convince your audience of you (e.g. to trust you not to track them)
* Requires a lot of effort to find and manage advertisers

#### Case study

* [Read the Docs](http://blog.readthedocs.com/ads-on-read-the-docs/)
* [Hoodie](http://hood.ie/sponsoring/)

## Be employed by the company and continue your project

Companies sometimes hire individuals to work on open source projects, and you can look for a company that is using your open source project. Of course, in the company, the company's work and open source project working hours may be five or five cents. In addition, find a company that is willing to try out your new project. This is useful if you have experience demonstrating projects.

#### Pros

* You can use the company's resources
* It can be well aligned with the needs of the company
* Stable income

#### Cons

* It takes a lot of luck to get such an opportunity, and there is currently no clear and repeatable way to get such an opportunity
* Projects usually need to be very famous and used
* For those who do not work for the company's profits, this makes it easy for individuals to be prioritized by the company
* The company may unduly influence the development of the project
* The project may be affected due to poor balance between the two sides

#### Case study

[Donald Stufft + Hewlett-Packard and Python packaging (individual effort)] (https://twitter.com/dstufft/status/594119386333609984)
* [Rich Hickey + Cognitect and Clojure](http://www.bizjournals.com/triangle/news/2013/09/17/durhams-relevance-to-merge-with.html?full=true)
* [Aaron Patterson + ManageIQ and Ruby, Rails] (http://community.redhat.com/blog/2014/09/tenderlove-joins-manageiq/)
[Ryan Dahl + Joyent and Node.js (opens a YouTube video) (personal effort)] (http://www.youtube.com/watch?v=SAc0vQCC6UQ&t=29m20s)

## Start the project while on the job

Many open source projects started as side projects (Side) for employees
Project), even though it may eventually grow into a company, it should be a good idea to incubate it in the form of a side project.

If you want to go down this path, make sure you understand the company's policy on open source projects. Some companies encourage employees to work on open source projects during working hours, while others treat any of your work as a company project. Don't assume any assumptions, it's a good idea to ask the people in your company before you start.

#### Pros

* You can try new ideas without worrying about your income
* Can be well aligned with the company's needs
* Good for trying new ideas

#### Cons

* Need to develop in spare time, or be allowed to develop during working hours
* There is a risk of being excessively influenced by the company
* Extremely complex management situations may occur if it continues

#### Case study

* [Mozilla and Rust](https://www.rust-lang.org/faq.html#is-this-project-controlled-by-mozilla)
* [Google and Go](https://golang.org/doc/faq#history)
* [Facebook and React](https://www.quora.com/How-was-the-idea-to-develop-React-conceived-and-how-many-people-worked-on-developing-it-and-implementing-it-at-Facebook/ answer/Bill-Fisher-17)
* [Futurice's open source program](http://futurice.com/blog/sponsoring-free-time-open-source-activities)

## Subsidy

Subsidies are extremely large, extremely effective donations that do not need to be repaid, and organizations that provide subsidies can often benefit from other sources by giving subsidies, such as being close to you, demonstrating their impact, receiving your work reports or tax rates.

Subsidies can come from many places, including companies, software foundations, philanthropic foundations, and governments, and their technical and legal aspects vary greatly depending on their source. For example, a company can invoice you for consulting fees, while a charitable foundation can only give to non-profit organizations or individuals, and usually you have to find a non-profit organization to help you. If you're not familiar with subsidies, the best way to learn about them is to talk to people who have received them. Some of the success stories are listed below

#### Pros

* Few restrictions
* Guaranteed funding ensures that you can focus on your project for a period of time
Give your project time to catch your breath and experiment

#### Cons

* There are not many subsidized organizations in terms of software
* Subsidies are limited and it is always necessary to find a sustained method before using up the subsidy

#### Case study
* [Dat](https://usopendata.org/)
* [Andrey Petrov + Stripe Open-Source Retreat and urllib3](https://medium.com/@shazow/urllib3-stripe-and-open-source-grants-edb9c0e46e82#.45ylnxrh4)
* [Django + Mozilla Open Source Support](https://www.djangoproject.com/weblog/2015/dec/11/django-awarded-moss-grant/)

## Consulting services

Consulting is a flexible way to fund open source projects. You can plan your time more freely, such as 30 hours a week for consulting business and 10 hours for open source projects. Consultants are usually relatively expensive because of job instability and no company benefits. If you plan to do this type of company, you should want to create an LLC.

#### Pros

* This is a mature and well-defined business model that is acceptable to the public

#### Cons

* Consulting work requires manpower and should not be scaled (except for a very few)
* The demands of business itself can distract from open source projects
* May differ from the simple requirements of the software
* Projects need to be popular enough to make people willing to pay for the service

#### Case study

* [Neighbourhoodie](https://neighbourhood.ie/)
* [Baroque Software](http://baroquesoftware.com/)
* [OpenSSL](http://openssl.com/what.html)

## SaaS

SaaS stands for Software as a Service (https://en.wikipedia.org/wiki/Software_as_a_service). Under this model, the code itself is open source, but you can provide value-added services to make it easier for users to use. A typical value-added service is hosting payments.

#### Pros

* It is possible to build a community around this open source project and then make money with hosting services
* Enable open source projects to focus on the user level and help enterprises adopt the project when demand increases
* Large-scale transformation can be carried out according to the number of users

#### Cons

* For value-added service users, this often means that hosting services must be cheaper than hiring a person to maintain the project
* Value-added services may make free users unhappy

#### Case study

* [WordPress.com](http://wordpress.com/)
* [Moodle](https://moodle.org/)
* [Forge Laravel](https://forge.laravel.com/)
* [Gitlab](http://gitlab.com)
* [Sentry](https://getsentry.com/)
* [Travis CI](https://travis-ci.org/)
* [Ghost](https://ghost.org/)

## Dual protocol

Sometimes a project can offer two different licenses in exactly the same code: one that is commercially friendly and the other that is not (e.g. the GPL). The latter is free for individuals to use, while companies need to obtain a legal business license by purchasing a commercial agreement.

#### Pros

* This is a mature and well-defined business model that is acceptable to the public
* If successful, it can also be scaled

#### Cons

* It conflicts with the ideal of making software freely accessible
* The project needs to be large enough to meet the customer's needs

#### Case study

* [MySQL](http://www.mysql.com/about/legal/licensing/oem/)
* [SQLite](https://www.sqlite.org/copyright.html)

## Open Core

In the Open Core (https://en.wikipedia.org/wiki/Open_core) model, some aspects of the project are free, but some features are private and open only to paying users, often requiring the project to have enterprise needs.

#### Pros

* This is a mature and well-defined business model that is acceptable to the public
* If successful, it can also be scaled

#### Cons

* Paid items need to be designed and should be unique
* It conflicts with the ideal of making software freely accessible
* Exclusive features may make free users unhappy

#### Case study

* [Docker](https://www.docker.com/)
* [Elastic](https://www.elastic.co/)
* [Mesosphere](https://mesosphere.com/)
* [Sidekiq](http://sidekiq.org/)

## Foundation

[Foundation] (https://en.wikipedia.org/wiki/Foundation_&#40;nonprofit&#41; ) is a legal legal entity that can receive and spend. Since its purpose is not to make a profit, it is better to manage the project neutrally. In the United States, foundations can be 501c3 (non-profit) or 501c6 (trade unions), and many software foundations are trade unions because non-profit foundations require to demonstrate charitable purposes, which is difficult in software development.

#### Pros

* Neutral, the Foundation can help protect the code and manage the community
* Can spread influence among many donors
* To make the project legitimate, the company will prefer to pay/donate to the foundation rather than the individual

#### Cons

* Suitable for large projects only
* Due to IRS restrictions, there are restrictions on what projects can do
* It will take a lot of community effort and skills, and there will still be an effort to secure fundraising afterwards

#### Case study

* [Ruby Together](http://rubytogether.org/)
* [Python Software Foundation](https://www.python.org/psf/)
* [Node.js Foundation](https://www.sitepoint.com/goodbye-joyent-hello-node-js-foundation/)

## Venture Capital

Venture capital is a form of financing for high-growth businesses, unlike bank loans or any form of debt finance, where venture capital investors provide capital to own a certain share of your business. This kind of transaction is not like a loan, if your business hangs you don't need to repay the funder. Of course, if you succeed, you also need to return it exponentially to your investors.

Venture capital is high-risk, high-reward: VCs are more risk-tolerant than banks, and they expect huge returns if you succeed. If you plan to get venture capital, you should set up a company limited by shares. If you're new to the venture capital process, the best way to start is to ask the people who have successfully secured venture capital.

#### Pros

* Institutional support is beneficial to growing businesses
* A large amount of venture capital is poised to be launched

#### Cons

* Venture capital is ready to exit after multiplying the return at the beginning of the investment, and history has shown that the success of venture capital is difficult due to the structural characteristics of open source projects.
* Venture investors may change their motivations because of their priorities

(Translator's note: There is a type of venture capital in China who deliberately induces entrepreneurs who are not deeply involved in the world to sign unequal agreements, especially when entrepreneurs are most enthusiastic and difficult, so that they can also retreat when the business fails, and accordingly, entrepreneurs will lose badly, which is worth careful treatment)

#### Case study

* [Npm](http://blog.npmjs.org/post/76320673650/funding)
* [Confluent](http://www.confluent.io/blog/confluent-raises-a-series-b-funding)
* [NodeSource](https://techcrunch.com/2015/02/09/nodesource-raises-3-million-to-build-new-programming-tools/)
* [Meteor](http://info.meteor.com/blog/announcing-our-20m-series-b-funding)

--

## Contribute

I wrote this manual mainly to put together all the knowledge in my head, but I didn't plan to make major contributions or changes. The pros and cons are mostly subjective ideas from my point of view.

If there are any errors (especially case studies), you are very welcome to modify them. At the same time, if I find that any categories are missing, I also welcome your changes.

Regarding the contribution of the Chinese version, if there is an error or loss of information, please submit it in the original text, and if there is an error in the translation of the Chinese, please raise it directly here. If you feel that there is an error or loss of information, but for various reasons can not be expressed in English, worried that the Chinese expression will not be adopted, please raise this situation in the original text, I or other partners who know English and Chinese at the same time will help solve the problem.

This translation project uses [Translation Aids] (https://github.com/wizicer/TranslationTool) to assist in synchronizing the original text revisions.

## Protocol

The original license was Creative Commons CC0 1.0
License, i.e. you are free to use, commercial or non-commercial, but if you do, happy to hear something from you, find me here[@nayafia](http://twitter.com/nayafia), of course, it is not a requirement.

The Chinese version of the license is Creative Commons Attribution 4.0 International
License, similar to the original license, can basically be said to use how you want, the only thing is not to modify the original author's name or declare the derivative work with the original author's name.

! [](https://i.creativecommons.org/l/by/4.0/88x31.png)
