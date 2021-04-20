
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Memory Math Games (Work in Progress)](#memory-math-games-work-in-progress)
- [Instant Multiplication](#instant-multiplication)
  - [Calculate Percentage Tip](#calculate-percentage-tip)
  - [Squaring and More](#squaring-and-more)
  - [Figure out the day of the week of January first in any year.](#figure-out-the-day-of-the-week-of-january-first-in-any-year)
  - [Left to Right Addition](#left-to-right-addition)

<!-- /code_chunk_output -->


# Memory Math Games (Work in Progress)

This Repo is inspired by `Secrets of Mental Math, The Mathemagician's Guide to Lightning Calculation and Amazing Math Tricks`.

The following is a summary of concepts in the book and the associated practice files.

# Instant Multiplication
- to multiply any two digit number by 11 simply add the two numbers together and put the result between them.
i.e. 23 * 11: 2 + 3 = 5. so 23 * 11 = 253
for results above 10 you have to move the 1 over.

i.e 85 * 11 = 8(13)5 = 935

## Calculate Percentage Tip
take 10% of your bill, cut it in half and add the two results together to get 15%

## Squaring and More
skipping

## Figure out the day of the week of January first in any year.
| Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday |
| :----: | :-----: | :-------: | :------: | :----: | :------: | :----: |
|   1    |    2    |     3     |    4     |   5    |    6     | 7 or 0 |


i.e January 1 2020
last 2 digits of the year = 20
- add 25% (10% = 2), 20% = 4. 5% = 1) 25% = 5 you can ignore decimal numbers.
- so your total is 25. subtract the biggest multiple of 7 (basically like a modulo 7) to get the remainder
- 25 - 21 = 4. so 

## Left to Right Addition
basically, just always add numbers from left to right instead of right to left.
your brain can perform this faster and carries numbers better.

the book also recommends thinking about math in steps.

```js
43 + 28
43 + 20
= 63
+ 8 = 71
```