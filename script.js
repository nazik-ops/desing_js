 let html_div=document.createElement("div")
 html_div.className="block"
 document.body.append(html_div)
 let html_img=document.createElement('img')
 html_img.src="./img/girl.jpeg"
 html_div.append(html_img)
 let html_h1=document.createElement('h1')
 html_h1.innerText="Nazik Chargynbaeva"
 html_div.append(html_h1)
 let html_p=document.createElement('p')
 html_p.innerText='FRONTEND DEVELOPER'
 html_div.append(html_p)
let html_button=document.createElement('button')
html_button.innerText='MESSAGE'
html_div.append(html_button)