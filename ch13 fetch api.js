let factpara = document.querySelector("#factpara");             //used to access paragraph of html

// API (apis are used to fetch resource using request response object)

const URL = "https://cat-fact.herokuapp.com/facts";             //api link for fetching data stored in variable "URL"


const getdata = async () => {                                   //created a async function to use await
    console.log("getting the data .....");
    let response = await fetch(URL);                            //fetching data from URL and storing it in reponse variable using await
    console.log(response);                                      //printing response
    let data = await response.json();
    console.log(data);
    for (let i = 0; i < data.length; i++) {                     //for accessing every data array
        console.log(data[i].text);
        factpara.innerText += `${1+i}. `+data[i].text+"\n\n";   //for showing data on web page
    }
}

console.log(getdata());                                         //calling getdata() function to execute above code
 