const valor_hora=document.getElementById('valor_hora')
const d_trab=document.getElementById('d_trab')
const n_trab=document.getElementById("n_trab")
const h_extra=document.getElementById('h_extra')
const res=document.getElementById('res')
const bnt_Cal=document.getElementById('bnt_Cal')
const mes=document.getElementById('mes')
const imp=document.getElementById('imp')
const conteudo3=document.getElementById("conteudo3")

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

res.appendChild(conteudo3)

const somarSalario=()=>{
  const f_select=document.getElementById("f_select").value
    if(valor_hora.value=='' || f_select=="selecione"){  
        alert('Por favor insira o Valor da hora e Selecione o mês')
    }else{
        const horaE=valor_hora.value/10*2.5
        const somaExt=horaE+ Number(valor_hora.value)
        const TdiaT=d_trab.value*8*valor_hora.value
        const tNoite=n_trab.value*6.5*horaE 
        const tHe=h_extra.value*somaExt 
        const tSal=TdiaT+tNoite+tHe
        const sSal=TdiaT+tNoite+tHe
        const FY=tSal.toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });

        p1.innerHTML=`Mês: <strong>${f_select.toUpperCase()}</strong>`
        p2.innerHTML=`Valor por hora de trabalhado:<strong> &yen${valor_hora.value}</strong>`
        p3.innerHTML=`Referente a ${d_trab.value} dias : <strong>${TdiaT.toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' })}</strong>`
        p4.innerHTML=`Total de noite: ${n_trab.value} : <strong>${tNoite.toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' })}</strong>`
        p5.innerHTML=`Total hora extra: ${h_extra.value} : <strong>${tHe.toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' })}</strong>`
        p6.innerHTML=`<strong><p>Total salário ${FY}</strong></P>`

        localStorage.setItem(f_select,sSal)   
    }
    valor_hora.value=''
    d_trab.value=''
    n_trab.value=''
    h_extra.value=''
  }
 
const ctx = document.getElementById('myChart');
let janeiro=localStorage.getItem("janeiro")
let fevereiro=localStorage.getItem("fevereiro")
let marco=localStorage.getItem("marco")
let abril=localStorage.getItem("abril")
let maio=localStorage.getItem("maio")
let junho=localStorage.getItem("junho")
let julho=localStorage.getItem("julho")
let agosto=localStorage.getItem("agosto")
let setembro=localStorage.getItem("setembro")
let outubro=localStorage.getItem("outubro")
let novembro=localStorage.getItem("novembro")
let dezembro=localStorage.getItem("dezembro")
let grafico=null

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
  document.getElementById("janeiro").innerHTML="Janeiro: "+parseInt(janeiro).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("fevereiro").innerHTML="fevereiro: "+parseInt(fevereiro).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("marco").innerHTML="Março: "+parseInt(marco).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("abril").innerHTML="Abril: "+parseInt(abril).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("maio").innerHTML="Maio: "+parseInt(maio).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("junho").innerHTML="Junho: "+parseInt(junho).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("julho").innerHTML="Julho: "+parseInt(julho).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("agosto").innerHTML="Agosto: "+parseInt(agosto).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("setembro").innerHTML="Setembro: "+parseInt(setembro).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("outubro").innerHTML="Outubro: "+parseInt(outubro).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("novembro").innerHTML="Novembro: "+parseInt(novembro).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  document.getElementById("dezembro").innerHTML="Dezembro: "+parseInt(dezembro).toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
  
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
  setTimeout(reiniciar,5000)
}))

    
