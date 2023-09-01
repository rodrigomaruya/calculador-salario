const valor_hora=document.getElementById('valor_hora')
const d_trab=document.getElementById('d_trab')
const n_trab=document.getElementById("n_trab")
const h_extra=document.getElementById('h_extra')
const res=document.getElementById('res')
const bnt_Cal=document.getElementById('bnt_Cal')
const mes=document.getElementById('mes')
const imp=document.getElementById('imp')

const p1=document.createElement('p')
p1.setAttribute('class','p')
res.appendChild(p1)
const p2=document.createElement('p')
p2.setAttribute('class','p')
res.appendChild(p2)
const p3=document.createElement('p')
p3.setAttribute('class','p')
res.appendChild(p3)
const p4=document.createElement('p')
p4.setAttribute('class','p')
res.appendChild(p4)
const p5=document.createElement('p')
p5.setAttribute('class','p')
res.appendChild(p5)
const p6=document.createElement('p')
p6.setAttribute('class','p')
res.appendChild(p6)

bnt_Cal.addEventListener('click',((evt)=>{
    if(!valor_hora.value==''){
         const horaE=valor_hora.value/10*2.5
    const somaExt=horaE+ Number(valor_hora.value)
    const TdiaT=d_trab.value*8*valor_hora.value
    const tNoite=n_trab.value*6.5*horaE 
    const tHe=h_extra.value*somaExt 
    const tSal=TdiaT+tNoite+tHe
    const FY=tSal.toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
    p1.innerHTML=`Mês: <strong>${mes.value}</strong>`
    p2.innerHTML=`Valor por hora de trabalhado:<strong> &yen${valor_hora.value}</strong>`
    p3.innerHTML=`Total de dias trabalhado: ${d_trab.value} = <strong>${TdiaT.toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' })}</strong>`
    p4.innerHTML=`Total de noite: ${n_trab.value} = <strong>${tNoite.toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' })}</strong>`
    p5.innerHTML=`Total hora extra: ${h_extra.value} = <strong>${tHe.toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' })}</strong>`
    p6.innerHTML=`<strong><p>Total salário ${FY}</strong></P>`   
    }else{
        alert('Por favor insira o Valor da hora')
        window.location.reload()
    }
    valor_hora.value=''
    d_trab.value=''
    n_trab.value=''
    h_extra.value=''
    valor_hora.focus()
}))
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

    
