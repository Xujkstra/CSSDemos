# console调试

## console.table
  
console.table可以用于打印由对象组成的数组。

	let arr = [
		{'name':'Javascript','level':'junior'},
		{'name':'C++','level':'newbie'}
	]
	console.table(arr)

相比常用的console.log,console.table打印出来的结果更直观，也不需要手动去逐个点开相应的对象。

	console.table(arr,"name")
	console.table(arr,["name","level"])

[参考](https://blog.mariusschulz.com/2013/11/13/advanced-javascript-debugging-with-consoletable)

## console.time

conosole.time可以用于打印运行时间。

用console.log来显示运行时间:

	let startTime = new Date().getTime();
	let num = 1e6,sum=0;
	while(num--){
		sum++;
	}
	let endTime = new Date().getTime();
	console.log(endTime-startTime)
	
用console.time来显示运行时间

	console.time('start')
	let num = 1e6,sum=0;
	while(num--){
		sum++;
	}
	console.timeEnd('start)

需要注意的是，这两种方法都不能很精确的给出运行时间。

[参考](https://blog.mariusschulz.com/2013/11/22/measuring-execution-times-in-javascript-with-consoletime)

## console.group

console.group可以用于分组显示打印信息。一般需要显示的信息不多的时候，console.log完全够用，但当信息多于某个数量的时候，信息就会显示得很混乱。console.group就可以用于处理这个情况。

	console.group("URL Details");
	console.log("Scheme: HTTPS");
	console.log("HOST: example.com");
	console.groupEnd();
		
你也可以把信息分组给折叠起来。

	console.groupCollapsed("URL Details");
	console.log("Scheme: HTTPS")
	console.log("Host: example.com");
	console.groupEnd();

也可以进行嵌套。

	console.group("URL Details");   
	console.log("Scheme: HTTPS")
	console.log("Host: example.com");

	// Nested group
	console.group("Query String Parameters");
	console.log("foo: bar")
	console.log("value: 42");
	console.groupEnd();

	console.groupEnd();
	
[参考](https://blog.mariusschulz.com/2014/11/25/advanced-javascript-logging-using-console-group)
