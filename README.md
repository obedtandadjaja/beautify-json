# beautify-json
jquery plugin to make JSON more human-readable

A simple, light-weight jquery plugin that makes your JSON messages easier to read.

I have done quite a thorough test on it and it works perfectly so far, if you come across a JSON format that it does not "beautify" properly, please post it on the issues page.

#### Demos
Plain: https://cdn.rawgit.com/obedtandadjaja/beautify-json/master/plain.html

Flexible: https://cdn.rawgit.com/obedtandadjaja/beautify-json/master/flexible.html

Strict: https://cdn.rawgit.com/obedtandadjaja/beautify-json/master/strict.html

#### Versions
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
3. Collapsible
4. No color coding for different types
5. Demo: https://cdn.rawgit.com/obedtandadjaja/beautify-json/master/flexible.html

##### Strict
1. Handles only perfectly formatted JSON, if not then show error
2. Done with nested divs, uls, and lis
3. Collapsible
4. Color coding for different types
5. Demo: https://cdn.rawgit.com/obedtandadjaja/beautify-json/master/strict.html

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
    });
  </script>
  
  ````
  
#### Functionality
This Plugin is able to "beautify" completely unformatted JSON such as:
````
{"total":3,"per_page":20,"current_page":1,"last_page":1,"next_page_url":null,"prev_page_url":null,"from":1,"to":3,"data":
[{"id":"0ecfe87f4e04425f87cf9336be50ed55","title":"Test","slug":"test","content":"Test 12356788<\/p>\n","created_at":"201
6-02-06 05:36:48","updated_at":"2016-02-06 05:36:48","published_at":"2016-02-06 05:36:48","user_id":"7","proposal_id":nul
l,"content_brief":"Test 12356788\n","is_published":true,"tagged":[]},{"id":"864b671611684f0091119d1d2a1071a3","title":"Te
sting Post","slug":"testing-post","content":"This is for testing purpose only. Please ignore!<\/p>\n\n\u00a0<\/p>\n\n\u00
a0<\/p>\n","created_at":"2016-01-31 21:53:48","updated_at":"2016-01-31 21:53:48","published_at":"2016-01-31 21:53:48","us
er_id":"2","proposal_id":null,"content_brief":"This is for testing purpose only. Please ignore!\n\n\u00a0\n\n\u00a0\n","i
s_published":true,"tagged":[]},{"id":"feb01474019e44c3a0273058dba8f1ce","title":"First Post!","slug":"first-post","conten
t":"Just wanted to try this out and post my first post! Welcome to Protege! More features are coming out soon!<\/p>\n","c
reated_at":"2016-02-19 16:36:30","updated_at":"2016-02-19 16:36:55","published_at":"2016-02-19 16:36:55","user_id":"4","p
roposal_id":null,"content_brief":"Just wanted to try this out and post my first post! Welcome to Protege! More features a
re coming out soon!\n","is_published":true,"tagged":[]}]}
````

To semi-formatted JSON such as:
````
    {
	total: 3,
	per_page: 20,
	current_page: 1,
	last_page: 1,
	next_page_url: null,
	prev_page_url: null,
	from: 1,
	to: 3,
	data: [
	{
	id: "0ecfe87f4e04425f87cf9336be50ed55",
	title: "Test",
	slug: "test",
	content: "Test 12356788 ",
	created_at: "2016-02-06 05:36:48",
	updated_at: "2016-02-06 05:36:48",
	published_at: "2016-02-06 05:36:48",
	user_id: "7",
	proposal_id: null,
	content_brief: "Test 12356788 ",
	is_published: true,
	tagged: [ ]
	},
	{
	id: "864b671611684f0091119d1d2a1071a3",
	title: "Testing Post",
	slug: "testing-post",
	content: "This is for testing purpose only. Please ignore!     ",
	created_at: "2016-01-31 21:53:48",
	updated_at: "2016-01-31 21:53:48",
	published_at: "2016-01-31 21:53:48",
	user_id: "2",
	proposal_id: null,
	content_brief: "This is for testing purpose only. Please ignore!     ",
	is_published: true,
	tagged: [ ]
	},
	{
	id: "feb01474019e44c3a0273058dba8f1ce",
	title: "First Post!",
	slug: "first-post",
	content: "Just wanted to try this out and post my first post! Welcome to Protege! More features are coming out soon! ",
	created_at: "2016-02-19 16:36:30",
	updated_at: "2016-02-19 16:36:55",
	published_at: "2016-02-19 16:36:55",
	user_id: "4",
	proposal_id: null,
	content_brief: "Just wanted to try this out and post my first post! Welcome to Protege! More features are coming out soon! ",
	is_published: true,
	tagged: [ ]
	}
	]
	}
````

And even "beautiful" ones which it will not do anything to it, such as:
````
  {
		total: 3,
		per_page: 20,
		current_page: 1,
		last_page: 1,
		next_page_url: null,
		prev_page_url: null,
		from: 1,
		to: 3,
		data: [
			{
			id: "0ecfe87f4e04425f87cf9336be50ed55",
			title: "Test",
			slug: "test",
			content: "Test 12356788 ",
			created_at: "2016-02-06 05:36:48",
			updated_at: "2016-02-06 05:36:48",
			published_at: "2016-02-06 05:36:48",
			user_id: "7",
			proposal_id: null,
			content_brief: "Test 12356788 ",
			is_published: true,
			tagged: [ ]
			},
			{
			id: "864b671611684f0091119d1d2a1071a3",
			title: "Testing Post",
			slug: "testing-post",
			content: "This is for testing purpose only. Please ignore! ",
			created_at: "2016-01-31 21:53:48",
			updated_at: "2016-01-31 21:53:48",
			published_at: "2016-01-31 21:53:48",
			user_id: "2",
			proposal_id: null,
			content_brief: "This is for testing purpose only. Please ignore!     ",
			is_published: true,
			tagged: [ ]
			},
			{
			id: "feb01474019e44c3a0273058dba8f1ce",
			title: "First Post!",
			slug: "first-post",
			content: "Just wanted to try this out and post my first post! Welcome to Protege! More features are coming out soon! ",
			created_at: "2016-02-19 16:36:30",
			updated_at: "2016-02-19 16:36:55",
			published_at: "2016-02-19 16:36:55",
			user_id: "4",
			proposal_id: null,
			content_brief: "Just wanted to try this out and post my first post! Welcome to Protege! More features are coming out soon! ",
			is_published: true,
			tagged: [ ]
			}
		]
	}
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
