"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{1247:function(A,o,i){i.r(o),i.d(o,{default:function(){return a}});var K=i(885),U=i(2791),F=i(6871),t=i(2083),e=i(4580),r=i(184);function a(){var A=(0,F.UO)().movieId,o=(0,U.useState)(""),i=(0,K.Z)(o,2),a=i[0],R=i[1];return(0,U.useEffect)((function(){(0,t.M1)(A).then(R)}),[A]),(0,r.jsx)("ul",{children:a&&a.map((function(A){return(0,r.jsxs)("li",{children:[(0,r.jsx)("img",{src:A.profile_path?"https://image.tmdb.org/t/p/w500".concat(A.profile_path):e,alt:"actor avatar",height:"200px",width:"135px"}),(0,r.jsx)("h3",{children:A.name}),(0,r.jsxs)("p",{children:["Character: ",A.character]})]},A.credit_id)}))})}},2083:function(A,o,i){i.d(o,{Hg:function(){return R},M1:function(){return f},d0:function(){return c},tx:function(){return g},uP:function(){return w}});var K=i(5861),U=i(7757),F=i.n(U),t=i(4569),e=i.n(t),r="https://api.themoviedb.org/3",a="776d9fc25cdee411748cae84044282cc";function R(){return n.apply(this,arguments)}function n(){return(n=(0,K.Z)(F().mark((function A(){var o;return F().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,e().get("".concat(r,"/trending/movie/day?api_key=").concat(a));case 2:return o=A.sent,A.abrupt("return",o.data.results);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function c(A){return B.apply(this,arguments)}function B(){return(B=(0,K.Z)(F().mark((function A(o){var i;return F().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,e().get("".concat(r,"/movie/").concat(o,"?api_key=").concat(a));case 2:return i=A.sent,A.abrupt("return",i.data);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function f(A){return Q.apply(this,arguments)}function Q(){return(Q=(0,K.Z)(F().mark((function A(o){var i;return F().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,e().get("".concat(r,"/movie/").concat(o,"/credits?api_key=").concat(a));case 2:return i=A.sent,A.abrupt("return",i.data.cast);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function w(A){return u.apply(this,arguments)}function u(){return(u=(0,K.Z)(F().mark((function A(o){var i;return F().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,e().get("".concat(r,"/search/movie?api_key=").concat(a,"&page=1&query=").concat(o));case 2:return i=A.sent,A.abrupt("return",i.data.results);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function g(A){return v.apply(this,arguments)}function v(){return(v=(0,K.Z)(F().mark((function A(o){var i;return F().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,e().get("".concat(r,"/movie/").concat(o,"/reviews?api_key=").concat(a,"&page=1"));case 2:return i=A.sent,A.abrupt("return",i.data.results);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}},4580:function(A){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgBLAEsAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9DooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiljjeZwkaNI7cBVGSfwrdsvAPibUQGtvD2pzKf41tJNv54xQBg0V2KfB7xq4yPDd9j3QD+tMm+EfjOBct4b1Aj/AGItx/TNAHI0Vqah4U1vSQTfaNf2YHUz2zoP1FZdABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUnpjk0ALViw0661W7jtbK2lu7mQ4SKBC7N9AK9Y+G/7O2qeKFivtcaTR9Nb5liK/wCkSj2B+4Pc8+3evpLwr4G0TwVZ/ZtHsIrRSMPIBmST/ec8mgD5w8J/sx+IdYCTaxPFoluefLP72Yj/AHQcD8Tn2r17w9+zp4N0MI09pLq04/5aXshIz/uLhfzBr0+igDP0zQdO0WPy9PsLaxTGNttCsY/QCtCiigAooooAKwda8C+H/EQb+0tGsrxm/wCWkkC7/wAG6j863qKAPF/E/wCy94b1IM+k3Nzo056LnzovyY7v/Hq8b8YfAfxX4RV5hZjVbJeftFjlyB/tJjcPyI96+zKKAPzvIIJBGCO1FfaPjz4K+HPHiSTTW4sNSbkX1qoVyf8AbHR/x59CK+YviF8Jtd+Hc5a8h+1aczYjv4ATGfQN/dPsfwJoA4uiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooqxp2nXOr39vZWcD3N1O4jjiQZLMe1AC6Zpl3rN/BY2NvJdXc7bI4YxlmNfU/wk+Alj4PSLU9ZWO/1vhlUjdFbH/Z/vN/tdu3qdf4QfCG0+HemiefZc65Og8+4xkRg8+WnsO57/AJAek0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFQXlnDqFtJb3MST28ilXikUMrA9QQetT0UAfMPxf/AGfZNESfWfDMbz2C5eawGWeEd2Tuy+3Ue46eG1+iFfOvx5+CCxJceJvD0GAMyXtlEvHvKg/mPx9aAPnmiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvqv9n/4TDwrpaa7qcWNYu0zHG45toj2x2Zu/oOPXPlf7Pvw4HjDxKdUvYt2laYwcqw+WWbqqe4H3j+A719c0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUjLu4PSlooA+Tvj98KR4Q1T+29Lh26PePh40Hy28p5x7Keo9DkeleQV+gGv6FaeJdHu9Mv4xLaXMZjde/PQj0IOCD2Ir4a8Z+E7rwT4mvtHuwS9u+EkxgSIeVcfUY+nTtQBiUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFPt7eS7uIoIUaWaVgiIoyWYnAA+ppleqfs4+Ex4h8fpfTJuttKj+0HI48w8Rj88t/wCgD6V+G/g+HwL4QsNJj2mWNN9xIv8crcufz4HsBXT0UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFeIftO+BRqvh2DxFbJm70793PgctAx6/8BYg/Rmr2+qup6dBq+nXNjcqJLa5iaGRD3Vhgj8jQB+fNFaPiTQ5vDXiDUdKuP8AW2k7wk/3sHg/QjB/Gs6gAooooAKKKKACiiigAooooAKKKKACiiigAr6v/Zg8PjS/AMuosmJdSuGcN3MafIo/MOfxr5Qr7v8Ah9pI0LwRodjt2tDZxBx/tlQW/UmgDoaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD5R/af8ADw0zx1baki4j1K2BY+sifKf/AB3ZXjtfUf7Veki68GaZqCrmS0vNhPojqc/qq18uUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAWdLtPt+p2dt/z2mSP82Ar9BUQIAAMAcACvgvwSnmeM9AQ4w2oW4Oen+sWvvagAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPOv2gbMXnwn1rjLReVKp9MSpn9M18aV9ufGVPM+GHiMHH/AB6MefYg18R0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAanhSYW3inRpj0jvYXOfZwa+/K/PGORopFdDhlIYH3FfoJpd6mpada3cf3LiJJV+jAEfzoAtUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAHDfG6YQfCzxCx7wBP++nUf1r4or68/aV1EWXwuuYScG8uYYAPXDb//AGSvkOgAooooAKKKKACiiigAooooAKKKKACiiigAr7V+B+tjXfhjocpbdJBD9lcdwYyUGf8AgIU/jXxVX0R+yj4nAj1nQJG+YFb2Fc9eiyf+0/zNAH0RRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfO/wC1jrgMegaQjckyXci56dEQ/wDodfO9d58cPEw8T/ErVZY3329ows4j7Jw2PYtvP41wdABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXSfDjxa3gnxpperZPkxSbZ1H8UTfK/wBeCSPcCubooA/QyCdLiJJI2DxuoZWU5BB5BFSV43+zf8QR4i8LnQ7qTdqGlqFTceXg6Kf+A/d+m31r2SgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArk/ij4wXwP4K1HUwwFyE8q2B7ytwv5fePsprrK+T/wBpDx+PEniddEs5d1hpZKyFTw85+9/3yPl+u71oA8gZmdizEsScknqaSiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA2vBniy88E+JLLV7I5kgb54ycCRD95D7Ef0PavuHwx4ksvFuh2mq6fJ5lrcIGX1U91PoQcg/SvgSvSvgp8WH+Hmrm0vmaTQrth5yjnyG6eYo/mB1HuBQB9jUVDaXcV9bxzwSJNBIodJEYMrKeQQR1FTUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRXP+OPGuneAtAm1TUX+RflihU/PM/ZF9/5DJoA5b42/E1PAHhpo7WQf2zeqY7ZQeYx/FKfYdvU49DXxy7tI5ZmLMxyWY5JNbPjDxbf+NtfudW1GTdNKcKg+7Eg+6i+w/wAT3rFoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA9a+DHxtm8DyR6Rq7vPoLt8r/ee1JPVR3XPUfiO4P1bp+oW+qWkV1aTR3FtKoeOWJgysD0IIr8+K7v4Z/F/V/hxciKMm+0h2zLYyNgD1ZD/Cf0PcegB9q0VzPgn4iaJ4/sPtGlXQeRRmW2kwssX+8v8AUZHvXTUAFFFFABRRRQAUUUUAFFFFABRRRQAUUV5f8Tfjro3gaOS0tGTVNaHAt42+SI/9NGHT/dHP060Add438d6V4B0Z9Q1SbYORFAnMkzf3VHf69B3r44+IXxC1P4ja2b6+by4I8rb2qH5IV9B6k9z3+gAFDxV4t1Xxpq0mo6tdNc3DcKOiRr2VV6Af5OTWPQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAFnTNUvNGvYrywuZbO6iOUmhcqw/EV7p4F/ahnthHa+KbQ3ScD7faKA/1ZOh+q4+hrwKigD7z8M+ONC8YQCXR9Tt73jJjRsSL/vIcMPxFbtfnlBcS2syTQSvDKhyskbFWU+xFeg+Hvj74z8PBU/tMalCv/LPUE83824b/wAeoA+zKK+ddH/ay2gLqnh/J7y2lx/7Kw/9mrq7L9qHwfcgedFqVoe/mwKR/wCOsaAPX6K8zj/aL8COMtqssZ9GtJf6KaZP+0f4GiB26jPN/uWkg/mBQB6fRXi2oftU+GLcEWun6ldv2yiRqfxLE/pXG61+1dqlwGXStFtbMdA91K0x+uBtH86APpuuG8Y/Gbwr4LV0utQW6vF4+x2REsmfQ4OF/wCBEV8qeJfit4r8WBk1DWbg27cG3gIijI9Cq4z+Oa5OgD1Xx7+0N4g8WCS104/2HpzZBWB8zSD/AGn7fRce+a8qJJJJOSe9FFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUAEkADJPavRvB3wF8V+LQkz2o0mxbnz77Kkj/ZT7x/EAe9AHnNKFLZwCcDJx2FfV3hb9mXwxo4WTVHn1u4HUSsYos+yKc/mxr07TPDWlaNaNa2OnWtpbsNrRwwqqsPcAc/jQB8BUV9aeOP2cPDniQyXGmZ0K+bn/R13QMfePjH/ASPoa8M8WfAnxd4VLv/AGedUtF5+0afmTj3X7w/LHvQB59RSujRuyOpRlOCrDBBpKACiiigAooooAKKKKACiirWm6Ve6zcrbWFpPe3DdIreMux/AUAVaACzBVBZjwAO9eweEP2Z/EWtlJtYkj0S1OCUbEkxHsoOB+JyPSve/BPwg8N+AwsljZie+A5vbrDy/gei/wDAQKAPiP1zwaWvuzxF8OvDfitW/tTR7W5kbrN5eyX/AL7XDfrXkviz9lWzmDS+HtUe1kPItr0b0+gcDIH1DUAfNtFdL4u+HHiLwPKRq2myRQ5wtzH88Lenzjj8Dg+1c1QAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFdt8PfhHrvxEmD2kP2TTQ2Hv7gEJ7hR1Y+w/EivQvhD+z0+qLBrPimJ4bQ4eDTjlXkHYydwP9nqe+Oh+krS0hsbeOC3iSGCNQqRxqFVQOgAHQUAcP4D+C3hzwGkcsFuL7Uhyb66UM4P+wOifhz7mu+oooAKKKKACiiigDB8QeBdA8VKf7V0m0vXIx5skQ8wfRxhh+BrznW/2XPC2oFmsLm+0tz0VZBLGPwYbv8Ax6vZKKAPmXUv2T9UiJ/s/XrS5HYXMLxfy3Vz13+zT40tiRHFY3WO8VyBn/voCvruigD41f8AZ68eoeNEV/8AdvIP6vTof2ePHcmN2kRxZ/v3cXH5Ma+yKKAPkyy/Zg8X3JHmy6baDv5k7Mf/AB1TXTaX+ybISG1LxCqjvHa2+c/8CZv6V9G0UAeXaF+zh4M0Yq01rcarIOd15McZ/wB1NoP0INeiaVothodv9n0+yt7GD/nnbxLGv5AVdooAKKKKACiiigCK4to7uF4pkWWJwVZHUMrD0IPWvGfiH+zXpOtrJd+HmXR785Y25z9nkP06p+HHtXtdFAHwJ4k8Lar4R1N7DVrOSzuV5AflXH95SOGHuKyq+9fF3g3SfHGlPp+rWq3EJ5R+jxN/eRux/n3yK+Rvij8ItT+G955h3XujytiG9Veh7I47N+h7dwADg6KKKACiiigAooooAKKKKACiiigAr6M+A3wPSKODxL4htw0zYksrOUZCDqJHHr3A7deuMcx+z78Jx4q1AeINVh3aTaPiCJxxcSj19VXv6njsa+q6ACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACqmq6Vaa3YTWV9AlzaTKUkikGVYVbooA+NPjD8Jbj4cap59sHuNDuWPkTHkxHr5bn19D3HvmvOq+/8AxBoFl4n0i50zUYRPaXCFHQ/oR6EHkHsa+JviJ4EvPh74ln0y5zJD/rLe4xgSxk8H69iPUUAczRRRQAUUUUAFFFFABXQeA/B1z478U2WkW2UErbppcZ8qMfeb8unqSB3rn6+rf2bfAI8PeFDrVzHtv9UAddw5SAfdH/AvvfTb6UAeq6Jo1p4f0q106xiENpbRiONB2A/me5Pc1eoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACuA+Mvw5j+IPhSSKFF/tW0Bms3PBLd0z6MBj64Pau/ooA/PCSNopGR1KOp2srDBB7g0lev/tI+BB4c8VLrNrHtsdUyz4HCTj7w/4F9767q8goAKKKKACiiigDo/h34Tfxt4y0zSQD5U0u6dh/DEvzOfyBA9yK+6Le3jtYUiiUJEihVRRgKAMACvn79lPwoBBq3iKVfmciygJHYYaQ/idg/A19DUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAcf8WPB6+OPA+oaaqBroL51se4lXlcfXlfoxr4fIKkgggjgg9q/RCviz44+FR4U+I2pRxpstbw/bIfTDklgPo4YfgKAOCooooAKKKTOOR1HNAH3L8LPDo8K+AdF08rslWASTDv5j/O35FiPwrrK+E/+FoeL/8AoZ9W/wDAyT/Gj/haHi//AKGfVv8AwMk/xoA+7KK+E/8AhaHi/wD6GfVv/AyT/Gj/AIWh4v8A+hn1b/wMk/xoA+7KK+E/+FoeL/8AoZ9W/wDAyT/Gj/haHi//AKGfVv8AwMk/xoA+7KK+E/8AhaHi/wD6GfVv/AyT/Gj/AIWh4v8A+hn1b/wMk/xoA+7KK+E/+FoeL/8AoZ9W/wDAyT/Gj/haHi//AKGfVv8AwMk/xoA+7KK+E/8AhaHi/wD6GfVv/AyT/Gj/AIWh4v8A+hn1b/wMk/xoA+7KK+E/+FoeL/8AoZ9W/wDAyT/Gj/haHi//AKGfVv8AwMk/xoA+7KK+E/8AhaHi/wD6GfVv/AyT/Gj/AIWh4v8A+hn1b/wMk/xoA+7KK+E/+FoeL/8AoZ9W/wDAyT/Gj/haHi//AKGfVv8AwMk/xoA+7KK+E/8AhaHi/wD6GfVv/AyT/Gj/AIWh4v8A+hn1b/wMk/xoA+7KK+E/+FoeL/8AoZ9W/wDAyT/Gj/haHi//AKGfVv8AwMk/xoA+7KK+E/8AhaHi/wD6GfVv/AyT/Gj/AIWh4v8A+hn1b/wMk/xoA+7KK+E/+FoeL/8AoZ9W/wDAyT/Gj/haHi//AKGfVv8AwMk/xoA+7KK+E/8AhaHi/wD6GfVv/AyT/Gj/AIWh4v8A+hn1b/wMk/xoA+7KK+E/+FoeL/8AoZ9W/wDAyT/Gj/haHi//AKGfVv8AwMk/xoA+7KK+E/8AhaHi/wD6GfVv/AyT/Gj/AIWh4v8A+hn1b/wMk/xoA+7K8G/ar8NifQtJ1uNcvazG2lIHVHGQT7Arj/gVeGf8LQ8X/wDQz6t/4GSf41V1Px14i1uyktNQ1zUL21fBaGe5d0bBBGQT6igDFooooA//2Q=="}}]);
//# sourceMappingURL=247.3f3219f0.chunk.js.map