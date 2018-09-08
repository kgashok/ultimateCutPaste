// client-side js
// run by the browser each time your view template is loaded

console.log('hello world :o');

//the variable that will hold the definition of 
//the required function to calculate prime factors
var stringFunc = "";

// our default array of dreams
const dreams = [
  'Find and count some sheep',
  'Climb a really tall mountain',
  'Wash the dishes'
];

// define variables that reference elements on our page
const dreamsList = document.getElementById('dreams');
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements['dream'];



// a helper function that creates a list item for a given dream
const appendNewDream = function(dream) {
  const newListItem = document.createElement('li');
  newListItem.innerHTML = dream;
  dreamsList.appendChild(newListItem);
  
}

// iterate through every dream and add it to our page
dreams.forEach( function(dream) {
  appendNewDream(dream);
});

// Really? to determine whether an input is 
// an integer or not? 
// https://stackoverflow.com/a/14794066/307454
function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

function addOutput(number, factorList) { 
  var primeString = number + " has factors: " + factorList;
  dreams.push(primeString);
  appendNewDream(primeString);
}

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = function(event) {
  // stop our form submission from refreshing the page
  event.preventDefault();

  if (isInt(dreamInput.value)) {
    // get dream value and add its prime factors
    if (stringFunc === "") {
      console.log("Function not available! "); 
      getPrime(dreamInput.value);
    } else {
      console.log ("stringFunc" + stringFunc);
      eval(stringFunc);
      var primes = getAllFactorsFor(dreamInput.value); 
      addOutput(dreamInput.value, primes);
    }
  }
  else {
    dreams.push(dreamInput.value);
    appendNewDream(dreamInput.value);
  }

  // reset form 
  dreamInput.value = '';
  dreamInput.focus();

  // getPrime(dreams); 
  // causes error - how do I allow for Cross origin requests on Glitch?
  // Look at server.js - I have added the required headers and still does not work?
  // https://support.glitch.com/t/uploaded-assets-blocked-by-cors-no-access-control-allow-origin-header/1176/11
  // What am I doing wrong? 
  
  // digitalWestie:
  // getPrime submits a request to stackoverflow 
  // the thing is you need to allow cross origin requests from the server side 
  // in this instance you are the requester, it's the requestee that needs to give you permission (i.e. Stackoverflow need to enable CORS!)
  // so unfortunately not much you can do!
  // you can maybe check if stackoverflow has an API? APIs tend to allow CORS.
  
  // https://stackoverflow.com/a/46785554/307454 - suggest use of CORs service which is what eventually worked!


};

function getPrime (value) {
  
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      //xhr.status === 200 ? stringFunc = extractCode(xhr) :
      xhr.status === 200 ? console.log("Success!") :
        console.error('error'); 
    }
  }
  
  xhr.onload = function() {
    //var xml = this.responseXML;
    //console.log("XML " + xml);

    console.log("trying to get a definition for getAllFactorsFor from SO"); 
    // here's the result of the ultimate cut and paste!
    stringFunc = extractCode(xhr);
    eval(stringFunc);
    
    var primes = getAllFactorsFor(value);
    console.log("factors for " + value + " : ");
    console.log(primes);
    addOutput(value, primes);
    //console.log ("dreams:" + dreams); 
  }

  function extractCode(xhr) {
    let xml = xhr.responseXML;
    //console.log("xml:" + xml);
    if (xml !== null) {
      //let nodepath = '//body/main/div[5]/div/div[2]/pre'; 
      //let ashwinPath = '//*[@id="answer-52202466"]/div/div[2]/div[1]/pre/code';
      //let nodepath = ashwinPath;
      let nodepath = '//*[@id="answer-43999812"]/div/div[2]/div[1]/pre[1]/code'; 

      var result = 
        xml.evaluate(nodepath, xml, null, XPathResult.STRING_TYPE, null).stringValue;
      if (result === null)
        console.log ("Extract failed!");
      else 
        console.log("result is:" + result);
      return result;  
    }
  }
  //const url = "https://stackoverflow.com/questions/39899072/how-to-find-prime-factors-using-a-for-loop-in-javascript"; 
  const url = "https://cors.io/?https://stackoverflow.com/questions/39899072/how-to-find-prime-factors-using-a-for-loop-in-javascript"; 

  xhr
  xhr.open('GET', url, true);
  xhr.responseType = "document"; 
  xhr.send();
}