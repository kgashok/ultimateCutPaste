var theStringForFunc = "";
function cli() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var parser = new DOMParser ();
    var xml = this.responseXML;
    console.log("XML " + xml);
    var evalue = getXMLValueByPath("//body/main/div/div[2]/div[1]/pre[1]/code/span[3]", xml);
    theStringForFunc = evalue;
    eval(theStringForFunc); 
    console.log("hello" + theStringForFunc);
    console.log(getAllFactorsFor(4761)); //3,3,23,23
    console.log(getAllFactorsFor(30)); //2,3,5
  }
  xhr.open("GET", "https://stackoverflow.com/questions/39899072/how-to-find-prime-factors-using-a-for-loop-in-javascript",true);
  xhr.responseType = "document";
  xhr.send();
}
function getXMLValueByPath(nodepath, xml)
{
  var result = xml.evaluate(nodepath, xml, null, XPathResult.STRING_TYPE, null).stringValue;
  return result;
}



var stringFunc = "";
function getPrime () {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      xhr.status === 200 ? 
        stringFunc = extractCode(xhr) :
      console.error('error')
    }
  }
  eval(stringFunc); 
  console.log(getAllFactorsFor(30)) // [2, 3, 5];
  console.log(JSON.stringify(getAllFactorsFor(4131)) ===
              JSON.stringify([3, 3, 3, 3, 3, 17])
             );
  function extractCode(xhr) {
    // console.log(xhr.responseText);
    let xml = xhr.responseXML;
    console.log("xml:" + xml);
    if (xml !== null) {
      // let nodepath = '//body/main/div[5]/div/div[2]/pre'; 
      //let ashwinPath = '//*[@id="answer-52202466"]/div/div[2]/div[1]/pre/code';
      //let nodepath = ashwinPath;
      let nodepath = '//*[@id="answer-43999812"]/div/div[2]/div[1]/pre[1]/code'; 
      var result = 
          xml.evaluate(nodepath, xml, null, XPathResult.STRING_TYPE, null).stringValue;
      console.log("result: " + result); 
      return result;   
    }
  }
  const url = "https://stackoverflow.com/questions/39899072/how-to-find-prime-factors-using-a-for-loop-in-javascript"; 
  xhr.open('GET', url, true);
  xhr.responseType = "document"; 
  xhr.send();
}
