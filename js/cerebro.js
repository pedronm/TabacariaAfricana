

function initMap() { 
        var uluru = {lat: -22.902733, lng: -43.174739};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
}

function abrirNovidade(id){
	
	$("#news-secao").hide('fast');
	$("#"+id).show('fast');

}

function fecharNovidade(id){
	
	$("#"+id).hide('fast');	
	$("#news-secao").show('fast');
	
}

function abrirMenu(){

	document.getElementById("menu-lateral").style.width="250px";
	/*document.getElementById("conteudo").style.marginLeft="250px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";*/

}

function fecharMenu(){
	//Retorna o valor em string como numeral, permitindo realizar o processo.
	var menuLateralVal = Math.max(document.getElementById("menu-lateral").offsetWidth);
	var menuLateral = document.getElementById("menu-lateral");
	
	if(menuLateralVal > 0 ){
		menuLateral.style.width="0";
		/*document.getElementById("conteudo").style.marginLeft="0";
		document.body.style.backgroundColor="white";*/
	}

}

function trocaIdiomaSite(idioma){
	
		trocaIdiomaInfo(idioma);
		trocaIdiomaNavegacao(idioma);
		trocaIdiomaNovidade(idioma,01);
		trocaIdiomaNovidade(idioma,02);
		trocaIdiomaTabaco(idioma);
		trocaIdiomaHistoria(idioma);
		
	}

function trocaIdiomaHistoria(idioma){

	var portugues = ['A tabacaria Africana fica ao lado do arco do Teles, em frente ao Largo do Paço Imperial, nas vistas da Praça XV, um endereço que não poderia ser mais nobre. Uma loja pequena , com fundos compridos – é lá, num tipo de aquário fechado, com ambiente climatizado e ótima exaustão, que os fumantes podem se entregar ao prazer do fumo, um tipo de whiskeria de antigamente com direito a degustação de café.',
					'Um oásis para quem gosta de saborear um charuto de boa procedência, cigarrilhas de gostos variados ou um simples cigarrinho mais cotidiano. O umidor está sempre com a temperatura entre 19º e 22º e umidade entre 60 a 80%. ',
					'Como não poderia deixar de ser, a charutaria tem uma longa historia para ser contada. A loja começa com o nome de José Carvalho da silva, como diz a inscrição do marco fundamental, é passada tempos depois para outro proprietário e ganha o nome de Porta Larga. Homenagem às amplas passagens do Arco do Teles. Por um tempo, a loja fica fechada para a construção do prédio Ibama. É reaberta, como loja de rua, como Tabacaria Africana – O sócio gostava de cultos de matriz africana. Nesse momento, a loja vende também artigos religiosos.',
					'O clima no “aquário” é de camaradagem, um comportamento próprio de um grupo de amigos. A loja já foi frequentada por personalidades diversas como o presidente Juscelino Kubitscheck e o chefe da guarda do Palácio do catete o polêmico gregório Fortunato , que comprava ali os charutos especiais do presidente Getulio Vargas.',
					'A tabacaria já passou por momentos de glória e escuridão. A mudança da capital, a transferência da Bolsa de Valores do rio e a lei que proíbe o fume em lugares públicos foram baques consideráveis. Mas, aos poucos, a loja foi se adaptando aos novos tempos.',
					'Um dos lugares mais emblemáticos do Rio de Janeiro, já foi conhecida como Largo do Paço, chamada oficialmente, no Segundo Reinado, de Pedro II e, batizada finalmente de praça XV de Novembro em 1889, na Proclamação da República.A praça é um braço aberto ao redor das várias histórias da formação da cidade e do país – está perto do Paço imperial, onde a Princesa Isabel assinou a lei Áaurea, e antes, D.PedroI disse ao povo que ficaria no Brasil.',
					'E lá perto também que está o Arco do Teles, onde funcionou a sede da primeira Bolsa de Valores do país.Antes ainda, lá pelos lados de 1779, o vice-rei Luis Vasconcelos ordenou a construção de um cais onde foi colocado o chafariz reformado pelo Mestre Valentim , um artista que deixou sua marca em vários monumentos da cidade.',
					'A praça, ponto de entrada e saída para as barcas que atravessam a Baía de Guanabara, ficou durante um tempo longe das visitas de quem andava pelo outro lado do Paço imperial, o que vai dar na rua Primeiro de Março, que já foi conhecida como Direita. A praça, ponto de entrada e saída para as barcas que atravessam a Baía de Guanabara, ficou durante um tempo longe das visitas de quem andava pelo outro lado do Paço imperial, o que vai dar na rua Primeiro de Março, que já foi conhecida como Direita.',
					'Estava escondida pela construção do viaduto da Perimetral. Mas, com as reformas do projeto Porto Maravilha, ela volta a fazer parte do cotidiano de quem atravessa o Paço  e a integrar um dos espaços mais charmosos e importante da cidade.'
					];
	var ingles 	= ['Tabacaria African is next to the arco do Teles, opposite to the largo do paço imperial, in the views of praça xv, an address that could not be nobler. Is there, in a small store, with long corridor, as a type of closed aquarium, with air-conditioned and great exhaustion enviroment, that smokers can surrender to the pleasure of smoking, it is a type of old whisk shop including coffe tasting.',
				   'An oásis for those who like to enjoy a good origin cigar, cigarillos of varied tastes or simpler common cigarrete. The humidor is Always in the temperature between 19 and 22 celsiuis degrees and humidity betwen 60% to 80%.',
					'As it should be, the cigar shop has a long story to tell. The store starts with the name José Cavalho da Silva, as presented in the inscription on the fundamental milestone, and sometime later is assumed by another owner, being than called Porta Larga, a good tribute to the large passages of Arco do Teles. For a while, the store is closed for construction of the ibama building. Now as a street store, it reopens as a street store called Tabacaria Africana –the partner liked african origin cults. At that time, the store also sells religious items.',
					'The climate in the “aquarium” is camaraderie, a proper behavior of a group of friends. The story has been frequented by many famous people like the president Juscelino Kubitschek and the catete Palace’s chief of guard, the controversial Gregório Fortunato, who used to buy there the special cigars of the President Getulio Vargas.',
					'The cigar shop has passed through moments of glory and darkness. The change of capital to Brasilia, the transfer of the stock Exchange of Rio de janeiro and the law prohibiting smoking in the public places were considerable thumps.However, gradually , the store was adapting to new times.',
					'One of the most iconic places of Rio de Janeiro, once know as Largo do Paço( the  Palace Square), had the oficial name, during the Second empire, of Pedro II, and finally received the name Praça XV de Novembro in 1889, by the proclamation of the Republic.The square is na open arm around the various tales telling the beginning of the city and the country – it is near the imperial palace, where princess isabel signed the Golden Law( to free the slaves), and before, D.Pedro I told the people that would remain in Brazil.',
					'It i salso near the Arco do Teles, where  the first headquarter of the Brazillian stock Exchange was established.Even before around 1779, the viceroy Luis vasconcelos ordered the construction of a píer where was placed the fountain renovated by Mestre Valentim, na artist who left his mark on several monuments of the city.',
					'The square, na entry na existing point for the ferries that cross the Guanabara Bay, during a certain period, was out of sight of the passers by the other side of the Imperial Palace. The side of the Imperial Palace the side that will culminate at Rua Primeiro de Março, which once was know as Rua Direita.',
					'It Was hidden behind the construction of the Viaduto da Perimetral, but with the renovation provided by Project porto Maravilha, it is once again parto f the daily routines of those who cross the Palace, and integrates of of the most charming and importante ares of the city.'];	
	
					var n = $("div#quem-somos p").length;
	
	if(idioma == 'ingles'){
		$('#titulo-historia-txt').html('The origin and the legacy of the Tobacco Shop');
	}else{
		$('#titulo-historia-txt').html('A origem e o legado da tabacaria');
	}

	for (i=0; i<n ; i++){		

		if(idioma == 'ingles'){
			paragrafo = $("p#paragrafo-"+i).html(ingles[i]);		
		}else{
			paragrafo = $("p#paragrafo-"+i).html(portugues[i]);						
		}

	}

	

}
function trocaIdiomaInfo(idioma){

	var portugues = ['Onde estamos', 'Endereço', 'Horários','2º à 6º das 9h às 20h','Sábados das 9h às 13h','Telefone','Celular(Disponivel no Whats'+"'"+'+s Up)'];
	var ingles = ['Where are we','Adress','Hours','Mon to Fri at 6:00a.m. till 10:00p.m.','Saturday from 9h to 13h', 'Telephone number', 'Cellphone number(avaible on whats'+"'"+'Up)'];
	
	main = $("#onde-estamos-info");

	if(idioma == 'ingles'){

		$("#onde-estamos-titulo").html(ingles[0]);
		$("#endereco-titulo").html(ingles[1]);
		$("#horarios-titulo").html(ingles[2]);
		$("#horarios-txt").html(ingles[3]);
		$("#horarios-txt-fds").html(ingles[4]);
		$("#telefone-txt").html(ingles[5]);
		$("#celular-titulo").html(ingles[6]);

	}else{

		$("#onde-estamos-titulo").html(portugues[0]);
		$("#endereco-titulo").html(portugues[1]);
		$("#horarios-titulo").html(portugues[2]);
		$("#horarios-txt").html(portugues[3]);
		$("#horarios-txt-fds").html(portugues[4]);
		$("#telefone-txt").html(portugues[5]);
		$("#celular-titulo").html(portugues[6]);	

	}
	

}

function trocaIdiomaNavegacao(idioma){

	var ingles = ['News','Tobacco', 'Who are we', 'Contact'];
	var portugues = ['Novidades','Tabaco','Quem somos','Contato'];

	if(idioma == 'ingles'){

		$('#novidade-txt').html(ingles[0]);
		$('#tabaco-txt').html(ingles[1]);
		$('#quem-somos-txt').html(ingles[2]);
		$('#contato-txt').html(ingles[3]);

		
		$('#novidade-txt-titulo-sessao').text(ingles[0]);
		$('#tabaco-txt-titulo-sessao').html(ingles[1]);
		$('#quem-somos-txt-titulo-sessao').html(ingles[2]);
		$('#contato-txt-titulo-sessao').html(ingles[3]);
		
	}else{

		$('#novidade-txt').html(portugues[0]);
		$('#tabaco-txt').html(portugues[1]);
		$('#quem-somos-txt').html(portugues[2]);
		$('#contato-txt').html(portugues[3]);

		$('#novidade-txt-titulo-sessao').text(portugues[0]);
		$('#tabaco-txt-titulo-sessao').html(portugues[1]);
		$('#quem-somos-txt-titulo-sessao').html(portugues[2]);
		$('#contato-txt-titulo-sessao').html(portugues[3]);

	}
}
function trocaIdiomaNovidade(idioma,novidadeId){

	var content_news_en_1 = ['Origins Festival','The Origin Festival takes place in the historic city of Cachoeira located in the ...','The Origens Festival takes place in the historic Cachoeira town located in the Bahia state of Bahia. Participants will have the opportunity to get to know the culture, history and production chain of tobacco, as well as learn their best harmonizations.' ];	
	var content_news_pt_1 = ['Festival Origens','O Festival Origens acontece na histórica cidade de cachoeira situada no recôncavo da Bahia...','O Festival Origens acontece na histórica cidade de cachoeira situada no recôncavo da Bahia, os participantes terão a oportunidade de conhecr a cultura, história e cadeia produtiva do tabaco, além de aprender suas melhores harmonizações. ' ];	
	var content_news_en_2 = ['Cigar from Bahia','Producers of the Recôncavo Baiano want to harmonize tobacco with coffee, cachaça and chocolate to sell more...','Cigar goes well with coffee, rum and chocolate. The idea of harmonizing different specialties manufactured in Bahia came from cigar producers in an attempt to boost consumption. The campaign was launched in early December in Cachoeira (110 km from Salvador). More than 85% of cigar tobacco production in Brazil is of Bahia origin, and the rest is produced in Alagoas as chopped tobacco, says Sinditabaco (Tobacco Industry Union of the State of Bahia). According to the union, of the 10 cigars nominated by the specialized magazine "Cigar Journal" as the best in the world, they all carry the Bahian tobacco somewhere - be it on the cover (tobacco leaf wrapped around the cigar), cloak leaf that surrounds the kernel) or filler (five or six tobacco leaves that make up the cigar core) <br /> <br/> <a href="https://www.uol/economia/especiais/charutos-do-reconcavo-baiano.htm#mistura-que-da-samba?cmpid=copiaecola"> see more in Uol' ];	
	var content_news_pt_2 = ['Charuto da Bahia','Produtores do Recôncavo Baiano querem harmonizar fumo com café, cachaça e chocolate para vender mais...','Charuto vai bem com café, cachaça e chocolate. A ideia de harmonizar diferentes especialidades fabricadas na Bahia partiu dos produtores de charuto, numa tentativa de impulsionar o consumo. A campanha foi lançada no começo de dezembro, em Cachoeira (110 km de Salvador).  Mais de 85% da produção de tabaco para charuto no Brasil é de origem baiana, e o restante é produzido em Alagoas, como fumo picado, diz o Sinditabaco (Sindicato da Indústria de Tabaco do Estado da Bahia). <br /> Ainda segundo o sindicato, dos 10 charutos apontados pela revista especializada "Cigar Journal" como os melhores do mundo, todos levam o tabaco baiano em alguma parte –seja na capa (folha de tabaco que envolve o charuto), capote (folha que envolve o miolo) ou enchimento (cinco ou seis folhas de tabaco que compõem o miolo do charuto)<br /> <br/> veja mais em <a href="https://www.uol/economia/especiais/charutos-do-reconcavo-baiano.htm#mistura-que-da-samba?cmpid=copiaecola"> Uol' ];	
	
	var news_1 = $('#novidade-01');
	var news_2 = $('#novidade-02');
	

	if(novidadeId==01){

		if(idioma == 'ingles'){
			$('#novidade-veja-mais').html('See more');
			$('#novidade-voltar').html('Go back');
			news_1.find("#titulo").html(content_news_en_1[0]);
			news_1.find("#noticia").html(content_news_en_1[1]);
			$("news-modal-01").find("#novidade-conteudo p").html(content_news_en_1[2]);
		}else{
			$('#novidade-veja-mais').html('Veja mais');
			$('#novidade-voltar').html('Voltar');
			news_1.find("#titulo").html(content_news_pt_1[0]);
			news_1.find("#noticia").html(content_news_pt_1[1]);
			$("news-modal-01").find("#novidade-conteudo p").html(content_news_pt_1[2]);

		}	
	}
	if(novidadeId==02){

		if(idioma == 'ingles'){
			$('#novidade-veja-mais').html('See more');
			$('#novidade-voltar').html('Go back');
			news_2.find("#titulo").html(content_news_en_2[0]);
			news_2.find("#noticia").html(content_news_en_2[1]);
			$("news-modal-02").find("#novidade-conteudo p").html(content_news_pt_2[2]);
		}else{
			$('#novidade-veja-mais').html('Veja mais');
			$('#novidade-voltar').html('Voltar');
			news_2.find("#titulo").html(content_news_pt_2[0]);
			news_2.find("#noticia").html(content_news_pt_2[1]);
			$("news-modal-02").find("#novidade-conteudo p").html(content_news_pt_2[2]);

		}	

	}

}

function trocaIdiomaTabaco(idioma){

	var texto_pt = ['À séculos faz parte de diversas culturas, seja para fins curativos, religiosos, sociais ou apenas entretenimento , o Tabaco, tem feito parte de diversos povos e culturas . Sendo consumido por meio da mastigação, fumo, aspirado até ingerido! Hoje é comercializado em amplamente e com essa disponibilidade, surgiram diversos tipos de fumos para que pudesse agradar a todos os gostos e maneiras de consumo!',
					'Acredita-se que tenha surgido dos Andes Bolivianos, onde era consumido por índios. Sendo primeiramente experimentado por povos europeus, por meio de contato com tribos costumeiras ao consumo do tabaco, provenientes das explorações na américa, datado que, às primeiras explorações de Cristóvão Colombo a América, introduziram os povos europeus ao costume do fumo de Tabaco. ',
					'Os Europeus foram os primeiros a consumirem o tabaco, dando o marco de consumo da planta amplamente pelos povos. Foi  o embaixador francês Jean Nicot, ao enviar tabaco para curar as enxaquecas da rainha Catherina Medicis, por meio desse fato, foi difundido entre a nobreza francesa e em seguida foi se propagando pela Europa.'];

	var texto_en = ['Centuries ago it is part of diverse cultures, for medicinal endings, religious, social or unique ends, Tobacco, has part of diverse people and cultures . Being consumed by chewing, smoking, inhaled even ingested! Today it is widely marketed and with this availability, different types of fumes have appeared so that it could please all tastes and ways of consumption!',
					'It is believed to have arisen from the Bolivian Andes, where it was consumed by Indians. Being first experienced by European peoples, through contact with tribes customary to tobacco consumption, they came from farms in America, dating to the first explorations of Christopher Columbus to America, introduced the European peoples to Tobacco tobacco custom.',	
					'Europeans were the first to consume tobacco, giving the framework of consumption of the plant widely by the people. It was the French ambassador Jean Nicot, in sending tobacco to cure the migraines of Queen Catherina Medicis, through this fact, was spread among the French nobility and then spread through Europe.'];
	
	var text_en_subTitulo = [];
	var text_pt_subTitulo = [];

	var texto_1 = $('#tabaco-texto-1');
	var texto_2 = $('#tabaco-texto-2');
	var texto_3 = $('#tabaco-texto-3');

	if(idioma == 'ingles'){

		texto_1.html(texto_en[0]);
		texto_2.html(texto_en[1]);
		texto_3.html(texto_en[2]);
		

	}else{
		
		texto_1.html(texto_pt[0]);
		texto_2.html(texto_pt[1]);
		texto_3.html(texto_pt[2]);
	}

}