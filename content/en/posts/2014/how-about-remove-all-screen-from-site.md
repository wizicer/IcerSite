---
title: What about field devices that no longer have screens?
tags:
- 杂文
- 微信
categories:
- 冰河杂谈
date: 2014-03-14
lang: en
translateDate: 9/30/2023
---

When I read the news in the morning, I saw this picture on the cover, this is the future factory envisaged by 'Rexroth', the details are not delved into, but the imagination in this picture made me associate, recently because of the study of the 'thermostat', it led away, in fact, most of the thermostat design is now in a similar way, that is, there is a small digital LCD screen, because the design of this LCD screen leads to the complexity of the program, and even some manufacturers in order to use LCD to display complex content, It also greatly increases the code complexity of the thermostat, which is actually a bit of putting the cart before the horse.

The thermostat is only the tip of the iceberg in a variety of industrial control equipment, in order to achieve field equipment intelligence, more and more field devices have been out of the constraints of PLC, their own corresponding calculations or control, and in order to make it easy for users to deal with these devices (that is, configuration), there is the problem we mentioned above, large and small screens appear on the site, and there will be some equipment, due to its special placement position, resulting in very inconvenient for engineers to carry out on-site maintenance.

It is precisely because of this picture that I think that if we make these field devices no longer have a display, as long as we are close to it, we can communicate with him after passing the certification and configure it, which can save a lot of display and display-related code, and of course, save the hard work of the test group partners (eh, I don't care about the unemployment problem).

## Do you want to think about Bluetooth?

The 'iBeacon' promoted by Apple is used for positioning, so it is thought that 'Bluetooth' can be used as a communication method, when our engineers hold the portable device close, by exchanging information with the field device authentication and activating the configuration process of the device, the engineer can smoothly use the portable device to reconfigure it or read the upload data.

If it is necessary to concentrate such information to the central control, then you can consider using a Bluetooth to Ethernet (can be wireless or wired) conversion base station, in view of the latest Bluetooth 4.0 standard has been able to support relatively long distances and a certain ability to penetrate a wall, so for the unobstructed factory environment, every 300-1000 square meters (the data is conjecture, no actual experience support) deployment of a such conversion base station can achieve the purpose of centralizing all data and real-time control.

## Is the era of intelligence in industry approaching?

Since we are talking about the smart portable devices used by engineers, let me diverge from the intelligent era in the industrial field.

There is a saying that we are about to usher in the fourth industrial revolution, which is entering the ** intelligent era **, which will be another important progress since the last completion of industrial control automation. Whether this is true or not, we are now in such a period of information overload, the reason why we are overloaded is because our ability to collect data has become stronger, and the ability to process data has not yet kept up, of course, these are mainly talking about the Internet industry. When we look back at the field of industrial control, we will find that due to the high price of sensors (of course, just in recent years, it has begun to decline significantly) ** data collection capabilities are backward, there is no corresponding data to process, there is no way to talk about the intelligence brought by big data**.

Today, the CTO of the company from the United States told us that our company is also considering the impact of big data on industrial control, but since these data belong to customers, we can't do anything, so it seems that such a project is only an experimental stage.

But I think this is not a problem at all, we don't actually need really complete customer data, the so-called big data is to analyze a large amount of data, and optimize according to specific algorithms, in order to produce better production benefits **, in view of this, we only need a small piece of customer data, understand the style of data, and write program analysis according to this style, we hand over the program to the customer to run, the final analysis results are still viewed by the customer himself, and then in order to assist its better development, We can also better optimize our algorithm by understanding this conclusion data, which is generally not sensitive data, and we, as stakeholders, are still willing to share it with us. This is my previous experience of doing big data analysis for customers, not just thinking of it.

Turning to our industrial control field, we can imagine that the assembly line in the factory will collect the data sent by the sensor in time according to the operation of various equipment, and make decisions to change the operating efficiency through the analysis of historical data, and finally make the efficiency of the factory reach the highest through multiple optimizations, and may also dynamically and automatically adjust the parameters due to the different varieties of products produced, so that most of the time can achieve high efficiency.

Of course, there is indeed another problem in this is the problem of safety, after all, if the adjusted parameters will damage the machine or cause accidents will be very serious, usually a single parameter we can easily confirm whether it is safe, but multiple parameters will affect each other will be much more complicated, for this, we may need a 'safety bolt' system, so that our intelligent system no matter how adaptive changes, will not touch some bottom line, just like the application running in the smart machine, In the case of a non-jailbreak, the system cannot be broken in any way (bug issues are beyond the scope of this discussion)

For the 'safety bolt' system, it will be a big topic, maybe share it at another time.
