---
title: Bluetooth 4.0, have you kept up?
slug: bluetooth-4
tags:
- 杂谈
- 微信
categories:
- 冰河杂谈
date: 2014-03-16
lang: en
translateDate: 9/30/2023
---
Today I will mainly talk to you about Bluetooth 4.0, first explain a few terms:

* `BLE`：Bluetooth Low Energy
* `SoC`：System on Chip

## What does Bluetooth 4.0 update?
There are quite a few update items, but I will only list the ones that I feel are worth paying attention to:

* Lower power consumption, one coin cell battery can be 'standby' for one or two years
* The transmission distance is longer, and the theoretical distance is increased to 100m compared to the previous 10-20m

Well, I talked to my classmates about this scheme, and thought that the power consumption was still a bit large when communicating, and I mistakenly thought that the 'CC2400' series only needed '1.7mW' of power, but after checking the information, I found that it was standby power, not the power during transmission. According to the official manual data of 'CC2540', it takes about '20mA' to transmit data, according to the voltage of using '3.3V', it takes '66mW' to transmit data, compared with the CC2400 series, the power consumption is almost the same, but the bandwidth is indeed much larger, so it can be seen here that he not only does not consume too much power, but also does have a lot of advantages.

Of course, if you use a Bluetooth solution, there is another advantage, that is, it is more versatile, you can connect without additional equipment, and you can connect by the Bluetooth function of the mobile device itself, so if our device needs to be used in life scenarios, and even often need to deal with portable devices, then there should be no doubt, use Bluetooth solutions.

## What can CC2540/2541 bring us?
The CC2540 is an SoC solution that contains some basic elements:

* An 8051 MCU
* 12-bit ADC
* Extended 128k/256k Flash

For me, the most attractive thing is the 8051 core, especially the addition of extended memory, which allows us to store relatively long programs, so for many cases, the peripheral design can be greatly simplified.

**A little addition**: In fact, there are still many low-power solutions running on the 2.4G frequency, but the reason why this time I pay so much attention to this Bluetooth chip is mainly because it can be well combined with portable devices.

## Let's imagine what we can do with this?

Well, finally the happiest moment has come, that is, imagine what we can do with this chip, in fact, in the last issue of the article has imagined the new industrial automation workshop screenless attempt, this article is actually driven by the screenless practice at that time, trying to find a chip suitable for specific implementation.

In fact, this is also very feasible in home control, for example, for me, I especially need such a function now: if the lights have not been turned off at more than ten o'clock at night, then call the time every ten minutes to urge sleep. If you use this chip, you can consider connecting a photoresistor as a sensor to send the signal to the host, and the host will control the speaker according to the time judgment after receiving the signal for time signaling operation.

Now many wearable devices have used such solutions, such as various pedometers, bracelets, health monitoring devices, and it is estimated that a larger number of devices will use this solution to interact with your phablet in the future.

![](bluetooth-4/5-band.jpg)
