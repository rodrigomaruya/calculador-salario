const valor_hora=document.getElementById('valor_hora')
const d_trab=document.getElementById('d_trab')
const n_trab=document.getElementById("n_trab")
const h_extra=document.getElementById('h_extra')
const res=document.getElementById('res')
const bnt_Cal=document.getElementById('bnt_Cal')

bnt_Cal.addEventListener('click',((evt)=>{
    if(valor_hora.value==''){
        alert('Por favor insira o Valor da hora')
    }else{res.innerHTML=`<p>Valor por hora de trabalhado: &yen${valor_hora.value}<p>Total de dias trabalhado: ${d_trab.value}</p><p>Total de noite: ${n_trab.value}</p><p>Total hora extra: ${h_extra.value}</p>`
    const horaE=valor_hora.value/10*2.5
    console.log(horaE)
    const somaExt=horaE+ Number(valor_hora.value)
    console.log(somaExt)
    const TdiaT=d_trab.value*8*valor_hora.value
    console.log(TdiaT)
    const tNoite=n_trab.value*6.5*horaE
    console.log(tNoite)
    const tHe=h_extra.value*somaExt
    console.log(tHe)
    const tSal=TdiaT+tNoite+tHe
    console.log(tSal)
    const FY=tSal.toLocaleString('yen-JP', { style: 'currency', currency: 'JPY' });
    console.log(FY)
    res.innerHTML+=`<strong><p>${FY}</strong></P>`}
    valor_hora.value=''
    d_trab.value=''
    n_trab.value=''
    h_extra.value=''
    
}))

    
