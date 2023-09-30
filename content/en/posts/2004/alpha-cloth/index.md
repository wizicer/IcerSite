---
title: Instant rendering "dressing" with alpha technology
tags:
- 冰河作品选
categories:
- 冰河作品选
date: 2004-12-19
lang: en
translateDate: 9/30/2023
---

> **Abstract**: Introduce the basic operation mode of the object-oriented language on the image and the fast rendering method of the image, the basic calculation skills and control of color.

> **Keywords**: Pixel Search API Rendering Alpha Technology Decompose RGB

## I. Introduction

With the development and popularization of computer technology and the "flood" of computer games, players' tastes are getting higher and higher, and they are no longer satisfied with the "incarnation" of their spotless self. They want more personalized images to use as their "digital spokesperson". This presents a big problem for artists in the first place - they have to draw a lot of drawings, and even "change" many clothes for the same character and the same look. Not only does this add difficulty and workload to the artists, but their work doesn't necessarily bring players satisfaction. To this end, in order to meet the personalized tastes of players, we design as few pictures as possible to meet as many users who need "personality" as possible.

What we're talking about here is just a theory, so we'll use Visual Basic as the easiest way to understand how programming as a demonstration will make it easy for us to master this technique.

## Second, analyze the image

| ![](1.png) | ![](2.png) |
| -- | -- |

As shown in the figure, these two pictures are the basic diagram of our operation. We can see a lot of pink areas, which are areas that we don't need. So we change the pink area into the background, and then change the different colored areas according to the right picture with different fabrics, and the protagonist will become more beautiful and outstanding.

## Third, the basic operating procedure - analysis of the pixels of the image

**Output Image Body**

First read the color of the first pixel of the image, and then cycle to search for each pixel in the image, if the color of a pixel is different from the color of the first pixel of the image, the color of the pixel is output at the corresponding position in the background, and when the output is completed, the protagonist is output to the background, as shown below.

![](3.png)

**Output clothes**

First determine which parts of the clothes have been confirmed by the user, and according to this determination MColor, represent the logo of the output part, and then do a loop search, if the color of a pixel is the same as MColor, it means that it has entered the part of the clothing, which corresponds to the output of the color of the fabric selected by the user. As shown in the picture, the clothes are changed.

MColor can be set to the corresponding RGB values of red, green, blue, and yellow.

red-255、green-64512、blue-16711680、yellow-64767

![](4.png)

## Fourth, further processing of images

As can be seen from the above treatment, the effect is very bad, and the place where the clothes were originally painted was covered by the fabric "desperately". Therefore, we have to do a little processing to make the "clothes" and "textures" perfectly combined. So we thought of alpha technology, which alpha processed the color of the "clothes" and the pixels corresponding to the original image. When all the pixels are reassembled, the image is processed. As shown in the picture

Alpha Technology:

Alpha technology is essentially a transparent technology, in the computer graphics system, usually use the RGB color palette, composed of red, green, blue three primary colors, according to the formula of $RGB=R+256*G+256^2*B$, it is easy to decompose by RGB color into R, G, B three primary colors.

Alpha technology is to first separate the RGB three primary color components of the source pixel and the target pixel, and then multiply the three primary color components of the source pixel by the value of Alpha, and multiply the three primary color components of the target pixel by the inverse value of Alpha, and then add the results according to the corresponding color components, and then divide the final obtained result of each component by the maximum value of Alpha (usually this step is done by shifting, which is why the maximum value of Alpha is always a power of two). Finally, the three primary color components are recombined into one pixel output.

![](5.png)

## Fifth, the post-production processing of the program

An indispensable step in program design is to adjust the program interface to make it more user-friendly, adding some basic small functions, such as: directly viewing the fabric, easily switching the part of the fabric to be selected, and adjusting the alpha value. Remember to do some error handling. You know, users don't slowly check for errors for you.

The designed program is shown in the figure:

![](6.png)

## VI. Reference source program: (compiled under VB6) 

Address: Omitted

## VII. Summary

The "changing clothes" theory has a very large space for development, especially suitable for the current underdeveloped network world, so that users can get greater interaction and attract more eyes. If used in the game world, it can save a lot of resources, greatly shorten the development cycle of the game, and at the same time, this program will definitely make you feel the fun of the computer. If you are interested or need the source code, please feel free to exchange comments with me and send me EMail(mail:xxx) or q(qq:xxx) and I'm good to go.

## References:

1. Microsoft Studio API Help File.W32API .TXT.
2. Microsoft MSDN. Visual Basic Help.
