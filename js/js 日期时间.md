# Date

创建一个 JavaScript `Date` 实例，该实例呈现时间中的某个时刻。`Date` 对象则基于 [Unix Time Stamp](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16)，即自1970年1月1日（UTC）起经过的毫秒数。

## 语法

```js
new Date();
new Date(value);
new Date(dateString);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
```

>**备注：**创建一个新`Date`对象的唯一方法是通过[`new`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 操作符，例如：`let now = new Date();`
>若将它作为常规函数调用（即不加 [`new`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 操作符），将返回一个字符串，而非 `Date` 对象。 

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#参数)

`Date()`构造函数有四种基本形式

#### 没有参数

如果没有提供参数，那么新创建的Date对象表示实例化时刻的日期和时间。

#### Unix时间戳

- `value`

  一个 Unix 时间戳（[Unix Time Stamp](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16)），它是一个整数值，表示自1970年1月1日00:00:00 UTC（the Unix epoch）以来的毫秒数，忽略了闰秒。请注意大多数 Unix 时间戳功能仅精确到最接近的秒。

#### 时间戳字符串 `dateString`

表示日期的字符串值。该字符串应该能被 [`Date.parse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) 正确方法识别（即符合 [IETF-compliant RFC 2822 timestamps](https://tools.ietf.org/html/rfc2822#page-14) 或 [version of ISO8601](https://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15)）。

> **备注：**由于浏览器之间的差异与不一致性，强烈不推荐使用`Date`构造函数来解析日期字符串 (或使用与其等价的`Date.parse`)。对 RFC 2822 格式的日期仅有约定俗成的支持。 对 ISO 8601 格式的支持中，仅有日期的串 (例如 "1970-01-01") 会被处理为 UTC 而不是本地时间，与其他格式的串的处理不同。

#### 分别提供日期与时间的每一个成员

当至少提供了年份与月份时，这一形式的 `Date() `返回的 `Date `对象中的每一个成员都来自下列参数。没有提供的成员将使用最小可能值（对日期为`1`，其他为`0`）。

- `year`

  表示年份的整数值。 0到99会被映射至1900年至1999年，其它值代表实际年份。参见 [示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#例子：将两位数年份映射为_1900_-_1999_年)。

- `monthIndex`

  表示月份的整数值，从 0（1月）到 11（12月）。

- date可选

  表示一个月中的第几天的整数值，**从1开始**。默认值为1。

- `hours` 可选

  表示一天中的小时数的整数值 (24小时制)。默认值为0（午夜）。

- `minutes` 可选

  表示一个完整时间（如 01:10:00）中的分钟部分的整数值。默认值为0。

- `seconds` 可选

  表示一个完整时间（如 01:10:00）中的秒部分的整数值。默认值为0。

- `milliseconds` 可选

  表示一个完整时间的毫秒部分的整数值。默认值为0。

> **备注：**参数`monthIndex` 是从“0”开始计算的，这就意味着一月份为“0”，十二月份为“11”。
>
> **备注：**当Date作为构造函数调用并传入多个参数时，如果数值大于合理范围时（如月份为 13 或者分钟数为 70），相邻的数值会被调整。比如 new Date(2013, 13, 1)等于new Date(2014, 1, 1)，它们都表示日期2014-02-01（注意月份是从0开始的）。其他数值也是类似，new Date(2013, 2, 1, 0, 70)等于new Date(2013, 2, 1, 1, 10)，都表示同一个时间：`2013-03-01T01:10:00`。
>
> **备注：**当Date作为构造函数调用并传入多个参数时，所定义参数代表的是当地时间。如果需要使用世界协调时 UTC，使用 `new Date(Date.UTC(...))` 和相同参数。

## [简介](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#简介)

- 如果没有输入任何参数，则Date的构造器会依据系统设置的当前时间来创建一个Date对象。
- 如果提供了至少两个参数，其余的参数均会默认设置为 1（如果没有指定 day 参数）或者 0（如果没有指定 day 以外的参数）。
- JavaScript的时间由世界标准时间（UTC）1970年1月1日开始，用毫秒计时，一天由 86,400,000 毫秒组成。`Date` 对象的范围是 -100,000,000 天至 100,000,000 天（等效的毫秒值）。
- `Date` 对象为跨平台提供了统一的行为。时间属性可以在不同的系统中表示相同的时刻，而如果使用了本地时间对象，则反映当地的时间。
- `Date` 对象支持多个处理 UTC 时间的方法，也相应地提供了应对当地时间的方法。UTC，也就是我们所说的格林威治时间，指的是time中的世界时间标准。而当地时间则是指执行JavaScript的客户端电脑所设置的时间。
- 以一个函数的形式来调用 `Date` 对象（即不使用 [`new`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 操作符）会返回一个代表当前日期和时间的字符串。

```js
let now=Date();
console.log(now);  //Fri Apr 15 2022 20:50:48 GMT+0800 (中国标准时间)

now=new Date();
console.log(now);  //2022-04-15T12:50:48.950Z
```

## [属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#属性)

- [`Date.prototype` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

  允许为 `Date` 对象添加属性。

- `Date.length`

  `Date.length` 的值是 7。这是该构造函数可接受的参数个数。

```js
console.log(Date.length);  //7
```

## [方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#方法)

- [`Date.now()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/now)

  返回自 1970-1-1 00:00:00  UTC（世界标准时间）至今所经过的毫秒数。

- [`Date.parse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)

  解析一个表示日期的字符串，并返回从 1970-1-1 00:00:00 所经过的毫秒数。**备注：** 由于浏览器差异和不一致，强烈建议不要使用`Date.parse`解析字符串。

  > **备注：** 由于浏览器差异和不一致，强烈建议不要使用`Date.parse`解析字符串。

- [`Date.UTC()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC)

  接受和构造函数最长形式的参数相同的参数（从2到7），并返回从 1970-01-01 00:00:00 UTC 开始所经过的毫秒数。

## [JavaScript `Date` 实例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#javascript_date_实例)

所有的 `Date` 实例都继承自 [`Date.prototype` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)。修改 `Date `构造函数的原型对象会影响到所有的 `Date` 实例。

### [实例属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#实例属性)

- `Date.prototype.constructor`

  返回创建了实例的构造函数，默认是 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 构造函数。

```js
console.log(Date.prototype.constructor)  //[Function: Date]
```



## [例子](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#例子)

### [例子：创建一个日期对象的几种方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#>例子：创建一个日期对象的几种方法)

```js
let today=new Date();
console.log(today);  //2022-04-15T13:03:38.609Z

today=new Date("April 15, 2022 21:01:50");
console.log(today);  //2022-04-15T13:01:50.000Z

today=new Date("2022-04-15T21:01:50");
console.log(today);  //2022-04-15T13:01:50.000Z

today=new Date(2022,3,15);
console.log(today);  //  2022-04-14T16:00:00.000Z

today=new Date(2022,3,15,20,0,49);
console.log(today);  //2022-04-15T12:00:49.000Z
```

### [例子：将两位数年份映射为 1900 - 1999 年](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#例子：将两位数年份映射为_1900_-_1999_年)

为了创建和获取 0 到 99 之间的年份，应使用 [`Date.prototype.setFullYear()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear) 和 [`Date.prototype.getFullYear()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear) 方法。

```js
var date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

// 已弃用的方法, 同样将 98 映射为 1998
date.setYear(98);           // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

date.setFullYear(98);       // Sat Feb 01 0098 00:00:00 GMT+0000 (BST)
```

### [例子：计算经过的时间](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#例子：计算经过的时间)

下例展示了如何以毫秒精度计算两个日期对象的时间差：

由于不同日期、月份、年份长度的不同（日期长度不同来自夏令时的切换），使用大于秒、分钟、小时的单位表示经过的时间会遇到很多问题，在使用前需要经过详尽的调研。

```js
// 使用 Date 对象
var start = Date.now();

// 调用一个消耗一定时间的方法：
doSomethingForALongTime();
var end = Date.now();
var elapsed = end - start; // 以毫秒计的运行时长
```

```js
// 使用内建的创建方法
var start = new Date();

// 调用一个消耗一定时间的方法：
doSomethingForALongTime();
var end = new Date();
var elapsed = end.getTime() - start.getTime(); // 运行时间的毫秒值
```

```js
// to test a function and get back its return
function printElapsedTime (fTest) {
    var nStartTime = Date.now(),
        vReturn = fTest(),
        nEndTime = Date.now();
    alert("Elapsed time: " + String(nEndTime - nStartTime) + " milliseconds");
    return vReturn;
}
yourFunctionReturn = printElapsedTime(yourFunction);
```

> **备注：**在支持 [`Web Performance API`](https://developer.mozilla.org/zh-CN/docs/Web/API/performance_property) 的高精细度（high-resolution）时间功能的浏览器中，[`Performance.now()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance/now) 提供的所经过的时间比 [`Date.now()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/now) 更加可靠、精确。

### [获取自 Unix 起始时间以来经过的秒数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#获取自_unix_起始时间以来经过的秒数)

```js
let seconds=Math.floor(Date.now()/1000);
console.log(seconds);  //1650028247
```

注意此处需要返回一个整数 （仅做除法得到的不是整数），并且需要返回实际已经经过的秒数（所以这里使用了[`Math.floor()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)而不是[`Math.round()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round)).

## Date 对象方法

|                             方法                             |                             描述                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| [getDate()](https://www.nowcoder.com/tutorial/10012/da81c181ce9d4bdb954b2d0a3bb25f3b) |         从 Date 对象返回一个月中的某一天 (1 ~ 31)。          |
| [getDay()](https://www.nowcoder.com/tutorial/10012/8b4e345325fa48f8b9b47eb36840a793) |           从 Date 对象返回一周中的某一天 (0 ~ 6)。           |
| [getFullYear()](https://www.nowcoder.com/tutorial/10012/00ecd92f73fd4e6f95715fd27ac111f6) |               从 Date 对象以四位数字返回年份。               |
| [getHours()](https://www.nowcoder.com/tutorial/10012/aa127e9ae436435e8da201bc8a1b8fa8) |               返回 Date 对象的小时 (0 ~ 23)。                |
| [getMilliseconds()](https://www.nowcoder.com/tutorial/10012/a9869ccbb5644333beb5d8d0eda28975) |               返回 Date 对象的毫秒(0 ~ 999)。                |
| [getMinutes()](https://www.nowcoder.com/tutorial/10012/3c4e37c9081d47c8a53e0a469fd343a3) |               返回 Date 对象的分钟 (0 ~ 59)。                |
| [getMonth()](https://www.nowcoder.com/tutorial/10012/3d603f24624a49949cd4e7a9618687b9) |               从 Date 对象返回月份 (0 ~ 11)。                |
| [getSeconds()](https://www.nowcoder.com/tutorial/10012/3a664de255744a5497be658a9a838a08) |               返回 Date 对象的秒数 (0 ~ 59)。                |
| [getTime()](https://www.nowcoder.com/tutorial/10012/756c0f417a8d42ad924ee1a80de6c041) |             返回 1970 年 1 月 1 日至今的毫秒数。             |
| [getTimezoneOffset()](https://www.nowcoder.com/tutorial/10012/c0b01cb17ca14d5fa2a8d07560e6a972) |       返回本地时间与格林威治标准时间 (GMT) 的分钟差。        |
| [getUTCDate()](https://www.nowcoder.com/tutorial/10012/8407598bdc1e4a9d99fa8bafe0c59372) |       根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。        |
| [getUTCDay()](https://www.nowcoder.com/tutorial/10012/d4db76406c3845ec8287cee54d3e124f) |        根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。        |
| [getUTCFullYear()](https://www.nowcoder.com/tutorial/10012/d0a78491cac4467eaeae368fb2a02434) |           根据世界时从 Date 对象返回四位数的年份。           |
| [getUTCHours()](https://www.nowcoder.com/tutorial/10012/17d7c72b82ae46f4ae3bbbe9247e0596) |          根据世界时返回 Date 对象的小时 (0 ~ 23)。           |
| [getUTCMilliseconds()](https://www.nowcoder.com/tutorial/10012/75da0fe66bc94323acec52807cf2c7b3) |          根据世界时返回 Date 对象的毫秒(0 ~ 999)。           |
| [getUTCMinutes()](https://www.nowcoder.com/tutorial/10012/9aa7a84f18e44394a18ef25919cac6d0) |          根据世界时返回 Date 对象的分钟 (0 ~ 59)。           |
| [getUTCMonth()](https://www.nowcoder.com/tutorial/10012/a3ebf2e12df74dec8d322520136096b2) |          根据世界时从 Date 对象返回月份 (0 ~ 11)。           |
| [getUTCSeconds()](https://www.nowcoder.com/tutorial/10012/db61a9cf7c6f4118aa6544b05d41762c) |          根据世界时返回 Date 对象的秒钟 (0 ~ 59)。           |
|                          getYear()                           |           已废弃。 请使用 getFullYear() 方法代替。           |
| [parse()](https://www.nowcoder.com/tutorial/10012/8e94774b9a3c438fae23a8bfe6a92d0a) |      返回1970年1月1日午夜到指定日期（字符串）的毫秒数。      |
| [setDate()](https://www.nowcoder.com/tutorial/10012/537634265c704b34bc6c7789f62ad33d) |            设置 Date 对象中月的某一天 (1 ~ 31)。             |
| [setFullYear()](https://www.nowcoder.com/tutorial/10012/293c8109093247079bd270ae0647827c) |             设置 Date 对象中的年份（四位数字）。             |
| [setHours()](https://www.nowcoder.com/tutorial/10012/85d75b27b635407eaf8682ed6bb3e704) |              设置 Date 对象中的小时 (0 ~ 23)。               |
| [setMilliseconds()](https://www.nowcoder.com/tutorial/10012/c92ba84b44a34b6ca47ff9bda5fec54e) |              设置 Date 对象中的毫秒 (0 ~ 999)。              |
| [setMinutes()](https://www.nowcoder.com/tutorial/10012/d93d66d7b14e41f9bf3caaeae3940e36) |              设置 Date 对象中的分钟 (0 ~ 59)。               |
| [setMonth()](https://www.nowcoder.com/tutorial/10012/c1ef9c22bbed48058763e1c86a280fa9) |               设置 Date 对象中月份 (0 ~ 11)。                |
| [setSeconds()](https://www.nowcoder.com/tutorial/10012/948611bbb0294c298310b071a1d376ed) |              设置 Date 对象中的秒钟 (0 ~ 59)。               |
| [setTime()](https://www.nowcoder.com/tutorial/10012/e7424f2f1c744d9e92e9fc3c9b387df0) |             setTime() 方法以毫秒设置 Date 对象。             |
| [setUTCDate()](https://www.nowcoder.com/tutorial/10012/e7424f2f1c744d9e92e9fc3c9b387df0) |       根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。        |
| [setUTCFullYear()](https://www.nowcoder.com/tutorial/10012/b29793f1c0be4731b7c085ff1843c1ee) |        根据世界时设置 Date 对象中的年份（四位数字）。        |
| [setUTCHours()](https://www.nowcoder.com/tutorial/10012/a005522b1a884bb48d2f9571621b5af4) |         根据世界时设置 Date 对象中的小时 (0 ~ 23)。          |
| [setUTCMilliseconds()](https://www.nowcoder.com/tutorial/10012/2faf912da0f942b2a434b855c1a05ca1) |         根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。         |
| [setUTCMinutes()](https://www.nowcoder.com/tutorial/10012/a5c08568cb454107a6048f7a43ed26f2) |         根据世界时设置 Date 对象中的分钟 (0 ~ 59)。          |
| [setUTCMonth()](https://www.nowcoder.com/tutorial/10012/d73ea33841284644b733e9bcaab285ba) |         根据世界时设置 Date 对象中的月份 (0 ~ 11)。          |
| [setUTCSeconds()](https://www.nowcoder.com/tutorial/10012/aba547da9cda4beea05a7a3fd6497b16) | setUTCSeconds() 方法用于根据世界时 (UTC) 设置指定时间的秒字段。 |
|                          setYear()                           |           已废弃。请使用 setFullYear() 方法代替。            |
| [toDateString()](https://www.nowcoder.com/tutorial/10012/9281cf28b29748a485216e08f69826ae) |             把 Date 对象的日期部分转换为字符串。             |
|                        toGMTString()                         |           已废弃。请使用 toUTCString() 方法代替。            |
| [toISOString()](https://www.nowcoder.com/tutorial/10012/902b338e37b349f3a4047379b0505c51) |             使用 ISO 标准返回字符串的日期格式。              |
| [toJSON()](https://www.nowcoder.com/tutorial/10012/5c3e3887e74b49459d3ae3673bb970a1) |               以 JSON 数据格式返回日期字符串。               |
| [toLocaleDateString()](https://www.nowcoder.com/tutorial/10012/edd0f3ef7c0d45bb8c709de84e94bf44) |    根据本地时间格式，把 Date 对象的日期部分转换为字符串。    |
| [toLocaleTimeString()](https://www.nowcoder.com/tutorial/10012/07fdc38f32954644b2219a6e200cf760) |    根据本地时间格式，把 Date 对象的时间部分转换为字符串。    |
| [toLocaleString()](https://www.nowcoder.com/tutorial/10012/63de5081af0446cdb70d52cfb8c45a63) |          据本地时间格式，把 Date 对象转换为字符串。          |
| [toString()](https://www.nowcoder.com/tutorial/10012/02dbe7a801da4e608c94f0c59d735844) |                  把 Date 对象转换为字符串。                  |
| [toTimeString()](https://www.nowcoder.com/tutorial/10012/feaf1599de7d453d8a5ee4c1ed4f2dab) |             把 Date 对象的时间部分转换为字符串。             |
| [toUTCString()](https://www.nowcoder.com/tutorial/10012/57f481b8c7e54d2bb8fc303fa105796e) | 根据世界时，把 Date 对象转换为字符串。 实例： `var today = new Date();` `var UTCstring = today.toUTCString();` |
| [UTC()](https://www.nowcoder.com/tutorial/10012/a6ee52e6a3a443ed9dce589cff4d0580) |    根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。     |
| [valueOf()](https://www.nowcoder.com/tutorial/10012/0e0249b67e754f82b51613314e4c44fe) |                   返回 Date 对象的原始值。                   |

```bash
> let now=new Date();
undefined
> now
2022-04-15T13:15:19.175Z
> now.getFullYear()
2022
> now.getMonth()
3
> now.getDate()
15
> now.getDay()
5
> now.getHours()
21
> now.getMinutes()
15
> now.getSeconds()
19
> now.getMilliseconds()
175
> now.getTime()
1650028519175
> now.toLocaleDateString()
'2022/4/15'
> now.toLocaleTimeString()
'21:15:19'
> now.toLocaleString()
'2022/4/15 21:15:19'
> now.toString()
'Fri Apr 15 2022 21:15:19 GMT+0800 (中国标准时间)'
> now.toDateString()
'Fri Apr 15 2022'
> now.toTimeString()
'21:15:19 GMT+0800 (中国标准时间)'
> now.valueOf()
1650028519175
> now.toJSON()
'2022-04-15T13:15:19.175Z'

```

