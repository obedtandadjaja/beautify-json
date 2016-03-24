# beautify-json
jquery plugin to make JSON more human-readable

A simple, light-weight jquery plugin that makes your JSON messages easier to read.

I have done quite a thorough test on it and it works perfectly so far, if you come across a JSON format that it does not "beautify" properly, please post it on the issues page.

#### Screenshots
##### Strict:

![Strict](https://github.com/obedtandadjaja/beautify-json/blob/master/strict.png "Type: Strict")

##### Flexible:

![Flexible](https://github.com/obedtandadjaja/beautify-json/blob/master/flexible.png "Type: Flexible")

##### Plain:

![Plain](https://github.com/obedtandadjaja/beautify-json/blob/master/plain.png "Type: Plain")

#### Live Demo
Plain: https://cdn.rawgit.com/obedtandadjaja/beautify-json/master/index.html

#### Types
##### Plain
1. Handles incomplete/non-formatted JSON format (accepts JSON with a few missing brackets here and there)
2. Done all in the paragraph tag using whitespaces and breaks
3. Non-collapsible
4. No color coding
5. Very lightweight
6. Demo: https://cdn.rawgit.com/obedtandadjaja/beautify-json/master/plain.html

##### Flexible
1. Handles incomplete/non-formatted JSON format (accepts JSON with a few missing brackets here and there)
2. Done with nested divs, uls, and lis
3. Collapsible and hoverable
4. No color coding for different types
5. Demo: https://cdn.rawgit.com/obedtandadjaja/beautify-json/master/flexible.html

##### Strict
1. Handles only perfectly formatted JSON, if not then show error
2. Done with nested divs, uls, and lis
3. Collapsible and hoverable
4. Color coding for different types
5. Demo: https://cdn.rawgit.com/obedtandadjaja/beautify-json/master/strict.html

#### Options
1. Type
```
	$(document).ready(function(){
		$('.json').beautifyJSON({
			type: "plain"	// strict, plain, or flexible; default is strict
		});
	});
```
2. Collapsible
```
	$(document).ready(function(){
		$('.json').beautifyJSON({
			collapsible: true
		});
	});
```
3. Hoverable
```
	$(document).ready(function(){
		$('.json').beautifyJSON({
			hoverable: true
		});
	});
```
4. Color-code
```
	$(document).ready(function(){
		$('.json').beautifyJSON({
			color: true
		});
	});
```

#### Installation
1. Clone this repository or download the file ```jquery.beautify-json.js```
2. In your html file, make sure you have a script tag for ```jquery.min.js``` and ```jquery.beautify-json.js```
  ````
  <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
  
  <script src="jquery.beautify-json.js"></script>
  ````
3. Have your JSON under any HTML tag
  ````
  <p>JSON data...</p>
  
  <h1>JSON data...</h1>
  
  <div class="json">JSON data...</div>
  ````
4. Call the beautify method to the HTML tag or id/class you specified
  ````
  
  <script>
    $(document).ready(function()
    {
      	$('p').beautifyJSON();
	$('.json').beautifyJSON();
    });
  </script>
  
  ````

#### Copyright

````
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
````
