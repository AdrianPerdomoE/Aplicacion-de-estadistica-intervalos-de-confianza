const jsStats = require('js-stats')

function intervaloMediaPoblacionNormalVarianzaConocida(X,S,n,alfa){
    let Z = new jsStats.NormalDistribution(0, 1);//Normal estandar
    let alfaMedios = 1 - (alfa/2) // como el resultado esta en cola derecha, se considera el complemento
    let ZInv = Z.invCumulativeProbability(alfaMedios)
    return {'Inferior':X-ZInv*(S/(n**(1/2))),'Superior':X+ZInv*(S/(n**(1/2)))}
}

function intervaloMediaPoblacionNormalVarianzaDesconocidaMuestraPeque(X,S,n,alfa){
    let t =  new jsstats.TDistribution(n-1)
    let alfaMedios = 1 - (alfa/2) // como el resultado esta en cola derecha, se considera el complemento
    let inv = t.invCumulativeProbability(alfaMedios)
    return {'Inferior':X-inv*(S/(n**(1/2))),'Superior':X+inv*(S/(n**(1/2)))}
}

function intervaloMediaPoblacionDesconocidaMuestraGrande(X,S,n,alfa){
    let Z = new jsStats.NormalDistribution(0, 1);//Normal estandar
    let alfaMedios = 1 - (alfa/2) // como el resultado esta en cola derecha, se considera el complemento
    let ZInv = Z.invCumulativeProbability(alfaMedios)
    return {'Inferior':X-ZInv*(S/(n**(1/2))),'Superior':X+ZInv*(S/(n**(1/2)))}
}

function intervaloProporcionMuestraGrande(P,n,alfa){
    let Z = new jsStats.NormalDistribution(0, 1);//Normal estandar
    let alfaMedios = 1 - (alfa/2) // como el resultado esta en cola derecha, se considera el complemento
    let ZInv = Z.invCumulativeProbability(alfaMedios)
    return {'Inferior':P-ZInv*((P*(1-P)/n)**(1/2)),'Superior':P+ZInv*((P*(1-P)/n)**(1/2))}
}
function intervaloDiferenciaProporcionMuestraGrande(P1,P2,n1,n2,alfa){
    let Z = new jsStats.NormalDistribution(0, 1);//Normal estandar
    let alfaMedios = 1 - (alfa/2) // como el resultado esta en cola derecha, se considera el complemento
    let ZInv = Z.invCumulativeProbability(alfaMedios)
    return {'Inferior':(P1-P2)-ZInv*((P1*(1-P1)/n1 +P2*(1-P2)/n2 )**(1/2)),'Superior':(P1-P2)+ZInv*((P1*(1-P1)/n1 +P2*(1-P2)/n2 )**(1/2))}
}

function intervaloDiferenciaMediaVarianzaConocidaMuestraGrande(X,Y,n1,n2,s1,s2,alfa){//s1 y s2 son la varianza, van al cuadrado si se conoce desviacion
    let Z = new jsStats.NormalDistribution(0, 1);//Normal estandar
    let alfaMedios = 1 - (alfa/2) // como el resultado esta en cola derecha, se considera el complemento
    let ZInv = Z.invCumulativeProbability(alfaMedios)
    return {'Inferior':(X-Y)-ZInv*((s1/n1+s2/n2)**(1/2)),'Superior':(X-Y)-ZInv*((s1/n1+s2/n2)**(1/2))}
}



