const valor_hora=document.getElementById('valor_hora')
const d_trab=document.getElementById('d_trab')
const n_trab=document.getElementById("n_trab")
const h_extra=document.getElementById('h_extra')
const res=document.getElementById('res')
const bnt_Cal=document.getElementById('bnt_Cal')
const mes=document.getElementById('mes')
const imp=document.getElementById('imp')

let janeiro=0
let fevereiro=0
let marco=0
let abril=0
let maio=0
let junho=0
let julho=0
let agosto=0
let setembro=0
let outubro=0
let novembro=0
let dezembro=0

const janelaPopup=()=>{
  res.style.visibility="visible"
  const f_select=document.getElementById("f_select").value

  const conteudo4=document.createElement("div")
  conteudo4.setAttribute("class","conteudo4")
  res.appendChild(conteudo4)

  const conteudo3=document.createElement("div")
  conteudo3.setAttribute("class","conteudo3")
  conteudo4.appendChild(conteudo3)

  const btn_footer=document.createElement("div")
  btn_footer.setAttribute("class","btn_footer")
  conteudo4.appendChild(btn_footer)

  const btn_gravar=document.createElement("button")
  btn_gravar.setAttribute("class","btn1")
  btn_gravar.setAttribute("id","btn_gravar")
  btn_gravar.addEventListener("click",()=>{
    localStorage.setItem(f_select,sSal)
    reiniciar()
  })
  btn_gravar.innerHTML="Gravar"
  btn_footer.appendChild(btn_gravar)

  const btn_cancelar=document.createElement("button")
  btn_cancelar.setAttribute("class","btn1")
  btn_cancelar.setAttribute("id","btn_cancelar")
  btn_cancelar.addEventListener("click",()=>{
    reiniciar()
  })
  btn_cancelar.innerHTML="Cancelar"
  btn_footer.appendChild(btn_cancelar)

  const p1=document.createElement('p')
  p1.setAttribute('class','p')
  conteudo3.appendChild(p1)
  const p2=document.createElement('p')
  p2.setAttribute('class','p')
  conteudo3.appendChild(p2)
  const p3=document.createElement('p')
  p3.setAttribute('class','p')
  conteudo3.appendChild(p3)
  const p4=document.createElement('p')
  p4.setAttribute('class','p')
  conteudo3.appendChild(p4)
  const p5=document.createElement('p')
  p5.setAttribute('class','p')
  conteudo3.appendChild(p5)
  const p6=document.createElement('p')
  p6.setAttribute('class','p')
  conteudo3.appendChild(p6)
  
  const horaE=valor_hora.value/10*2.5
  const somaExt=horaE+ Number(valor_hora.value)
  const TdiaT=d_trab.value*8*valor_hora.value
  const tNoite=n_trab.value*6.5*horaE 
  const tHe=h_extra.value*somaExt 
  const tSal=TdiaT+tNoite+tHe
  const sSal=TdiaT+tNoite+tHe
  const FY= Number(tSal).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });

  console.log(horaE)

  p1.innerHTML=`Mês: <strong>${f_select.toUpperCase()}</strong>`
  p2.innerHTML=`Valor por hora de trabalhado:<strong> &yen${valor_hora.value}</strong>`
  p3.innerHTML=`Referente a ${d_trab.value} dias : <strong>${TdiaT.toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' })}</strong>`
  p4.innerHTML=`Total de noite: ${n_trab.value} : <strong>${tNoite.toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' })}</strong>`
  p5.innerHTML=`Total hora extra: ${h_extra.value} : <strong>${tHe.toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' })}</strong>`
  p6.innerHTML=`<strong><p>Total salário ${FY}</strong></P>`

}

const somarSalario=()=>{
  const f_select=document.getElementById("f_select").value
    if(valor_hora.value=='' || f_select=="selecione"){  
        alert('Por favor insira o Valor da hora e Selecione o mês')
    }else{
      janelaPopup()
              
    }
    valor_hora.value=''
    d_trab.value=''
    n_trab.value=''
    h_extra.value=''
  }
    janeiro=localStorage.getItem("janeiro")
    fevereiro=localStorage.getItem("fevereiro")
    marco=localStorage.getItem("marco")
    abril=localStorage.getItem("abril")
    maio=localStorage.getItem("maio")
    junho=localStorage.getItem("junho")
    julho=localStorage.getItem("julho")
    agosto=localStorage.getItem("agosto")
    setembro=localStorage.getItem("setembro")
    outubro=localStorage.getItem("outubro")
    novembro=localStorage.getItem("novembro")
    dezembro=localStorage.getItem("dezembro")
  
  let grafico=null
  
const ctx = document.getElementById('myChart');
grafico=new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril','Maio', 'Junho', 'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    datasets: [{
      label: '# of Votes',
      data: [janeiro, fevereiro, marco, abril, maio, junho,julho,agosto,setembro,outubro,novembro,dezembro],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const obterDados=()=>{
  document.getElementById("janeiro").innerHTML="Janeiro: "+Number(janeiro).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("fevereiro").innerHTML="fevereiro: "+Number(fevereiro).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("marco").innerHTML="Março: "+Number(marco).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("abril").innerHTML="Abril: "+Number(abril).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("maio").innerHTML="Maio: "+Number(maio).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("junho").innerHTML="Junho: "+Number(junho).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("julho").innerHTML="Julho: "+Number(julho).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("agosto").innerHTML="Agosto: "+Number(agosto).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("setembro").innerHTML="Setembro: "+Number(setembro).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("outubro").innerHTML="Outubro: "+Number(outubro).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("novembro").innerHTML="Novembro: "+Number(novembro).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("dezembro").innerHTML="Dezembro: "+Number(dezembro).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  
}
obterDados()
imp.addEventListener('click',()=>{
  const log=document.getElementById('log').innerHTML
  const conteudo=res.innerHTML
  let estilo='<style>'
  estilo+='p{margin-top: 10px;}'
  estilo+='</style>'
  const win=window.open('','','height=700,width=700')
  win.document.write('<html><head>')
  win.document.write('<title>Calculador de Salário</title>')
  win.document.write(log)
  win.document.write(estilo)
  win.document.write('</head><body>')
  win.document.write(conteudo)
  win.document.write('</body></html>')
  win.print()
})

const reiniciar=()=>{
  location.reload()
}
bnt_Cal.addEventListener('click',((evt)=>{
  somarSalario()
  // res.style.visibility="visible"
  //setTimeout(reiniciar,5000)
}))

const btn_editar=document.getElementById("btn_editar")
const n_mes=document.getElementById("n_mes")
const editar=()=>{
  let edita_mes=document.getElementById("f_mes").value
  let i_mes=n_mes.value
  localStorage.setItem(edita_mes,i_mes)
  document.getElementById("janeiro").innerHTML="Janeiro: "+Number(janeiro).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("fevereiro").innerHTML="fevereiro: "+Number(fevereiro).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("marco").innerHTML="Março: "+Number(marco).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("abril").innerHTML="Abril: "+Number(abril).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("maio").innerHTML="Maio: "+Number(maio).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("junho").innerHTML="Junho: "+Number(junho).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("julho").innerHTML="Julho: "+Number(julho).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("agosto").innerHTML="Agosto: "+Number(agosto).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("setembro").innerHTML="Setembro: "+Number(setembro).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("outubro").innerHTML="Outubro: "+Number(outubro).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("novembro").innerHTML="Novembro: "+Number(novembro).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("dezembro").innerHTML="Dezembro: "+Number(dezembro).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
}
btn_editar.addEventListener("click",()=>{
  editar()
  reiniciar()

})
    
