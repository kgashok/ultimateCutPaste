Welcome to Glitch
=================

Click `Show` in the header to see your app live. Updates to your code will instantly deploy and update live.

**Glitch** is the friendly community where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).


Your Project
------------

Inspired by the JavaScript [challenge](http://bit.ly/ultimateCutPaste), this project attempts to create the equivalent JavaScript code to achieve the same thing.

- Must [read](https://flaviocopes.com/xhr/)
- Write now the project uses **XHR**, must move to using [`fetch`](https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api)
- View other issues on the github [repo](https://github.com/kgashok/ultimateCutPaste/issues)

## Read about CORs 
- [CORs tutorial](https://www.html5rocks.com/en/tutorials/cors/)
- [Another CORs tutorial](https://www.eriwen.com/javascript/how-to-cors/)
- [JavaScript Alternative CORs library](https://github.com/jpillora/xdomain)

## Read about Express JS 
 - Eating out and Express JS - read the [analogy](https://medium.freecodecamp.org/going-out-to-eat-and-understanding-the-basics-of-express-js-f034a029fb66)
 
### The Core of the Solution

It is all about four lines. 

```js 
stringFunc = extractCode(xhr);
eval(stringFunc);
var primes = getAllFactorsFor(value);
```

and this one important line inside `extractCode` function:

```js
result = 
  xml.evaluate(nodepath, xml, null, XPathResult.STRING_TYPE, null)
     .stringValue;

```

---


On the front-end,
- edit `public/client.js`, `public/style.css` and `views/index.html`
- drag in `assets`, like images or music, to add them to your project

On the back-end,
- your app starts at `server.js`
- add frameworks and packages in `package.json`
- safely store app secrets in `.env` (nobody can see this but you and people you invite)

