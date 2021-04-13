var uncheckedOnLoad = 0;

var xhttp = new  XMLHttpRequest();
xhttp.onreadystatechange = function()
                            {
                                if(this.readyState == 4 && this.status == 200)
                                {
                                   
                                   var jlist =  JSON.parse(this.responseText);
                                   console.log(jlist);
                                   
                                   var content = '<br><tr><th>ID</th><th>Title</th><th>Completed</th></tr>'
                                   for(var i = 0;i<jlist.length; i++)
                                   {
                                       content += "<tr>";
                                       content += '<td class="alignCenter">' + jlist[i].id + "</td>";
                                       content += "<td>" + jlist[i].title + "</td>";
                                       
                                       if(jlist[i].completed==true)
                                       {
                                           content +=`<th><input type="checkbox" checked disabled onchange="checkup()"></th>`
                                       }
                                       else
                                       {
                                           content += `<th><input type="checkbox" oninput="checkup()" id="checkBox${uncheckedOnLoad}"></th>`;
                                           uncheckedOnLoad += 1; 
                                        }
                                        content += "</tr>";
                                   }
                                   document.getElementById("table").innerHTML =content;                        
                                   document.getElementById("progress").setAttribute("hidden", true);
                                }
                            };
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true)
xhttp.send();

var precount = 0;
function checkup()
{
    var promise = new Promise(function(resolve,reject)
                    {
                        var count = 0;

                        for(var i= 0;i<uncheckedOnLoad;i++)
                        {
                            if((document.getElementById("checkBox" +i)).checked == true)
                            {
                                count += 1;
                            }
                        }

                        //resolve
                        if(count==5 && precount<5)
                        {
                            resolve();
                        }
                        else
                        {
                            precount = count;
                        }
                    });
promise.then(function()
                {
                    setTimeout(function()
                                    {
                                        alert("Congrats! 5 Tasks have been Successfully Completed!");
                                        window.location.href='done.html';

                                    },10)
                });
}
