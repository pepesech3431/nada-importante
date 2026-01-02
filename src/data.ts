export interface CharacterData {
    id: number;
    name: string;
    sourceAnime: string;
    imageUrl: string;
    description: string;
    link?: string;
}

// Eliminé la función 'direct' porque ya no es necesaria, usaremos strings directos.

export const CHARACTERS: CharacterData[] = [
    { 
        name: "Star Butterfly", 
        sourceAnime: "Star vs The Forces of Evil", 
        imageUrl: "https://iili.io/fEv6RX1.png",
        description: "Una princesa mágica de la dimensión Mewni, enviada a la Tierra para aprender a controlar sus poderes. Es enérgica, optimista y siempre lista para defender a sus amigos con su varita mágica.",
        link: "https://crushon.ai/es/character/04a85c46-6a7e-4257-b8e1-d615a4ff87a6/details?shared=true" 
    },
    { 
        name: "Scarlet El Vandimion", 
        sourceAnime: "May I Ask for One Final Thing?", 
        imageUrl: "https://iili.io/f1DfwIj.png",
        description: "Conocida como la 'Princesa Perro Loco', Scarlet prefiere resolver disputas políticas y sociales utilizando sus puños en lugar de la diplomacia. Bajo su elegante apariencia aristocrática se esconde una luchadora brutalmente eficiente.",
        link: "https://crushon.ai/es/character/4581b3d0-3440-4ce2-ba5f-f65ded6a7a11/details?shared=true" 
    },
    { 
        name: "Utena Hiiragi", 
        sourceAnime: "Mahou Shoujo Ni Akogarete", 
        imageUrl: "https://iili.io/f1DCpv1.jpg",
        description: "Originalmente una chica tímida fanática de las chicas mágicas, fue reclutada a la fuerza como líder de la organización villana Enormita. Ahora descubre un retorcido placer sádico en dominar a sus antiguas heroínas.",
        link: "https://crushon.ai/es/character/1c0580ed-bedd-4a0e-86d3-dc771e703c89/details?shared=true"
    },
    { 
        name: "Marcille Donato", 
        sourceAnime: "Dungeon Meshi", 
        imageUrl: "https://iili.io/f1DuSoX.png",
        description: "Una talentosa maga elfa del grupo de Laios. Es experta en magia antigua y muy inteligente, pero sufre constantemente al verse obligada a comer monstruos de mazmorra cocinados de formas cuestionables.",
        link: "https://crushon.ai/es/character/9200b5e6-bd0a-4c7b-9a51-313f68f51159/details?shared=true"
    },
    { 
        name: "Maomao", 
        sourceAnime: "The Apothecary Diaries", 
        imageUrl: "https://iili.io/f1DauoB.png",
        description: "Una boticaria pragmática y excéntrica secuestrada para trabajar en el palacio interior. Posee una obsesión casi insana por los venenos y los misterios médicos, usando su ingenio agudo para resolver intrigas palaciegas.",
        link: "https://crushon.ai/es/character/f8d14b51-1268-420b-9802-c377db569df9/details?shared=true"
    },
    { 
        name: "Mita", 
        sourceAnime: "Mita (OC/Web)", 
        // CORREGIDO: URL limpia sin proxy
        imageUrl: "https://iili.io/f1DlG4t.png",
        description: "Una figura enigmática envuelta en misterio dentro del ámbito digital. Poco se sabe sobre sus verdaderos orígenes, intenciones o las capacidades completas de su existencia en la red.",
        link: "https://crushon.ai/es/character/630804da-0b6b-42f7-a720-14019361bf77/details?shared=true"
    },
    { 
        name: "Mikadono Sisters", 
        sourceAnime: "Mikadono Sanshimai", 
        // CORREGIDO: URL limpia sin proxy
        imageUrl: "https://iili.io/f1D1cqN.png",
        description: "Las tres hermanas prodigio: Kazuki (actriz), Niko (artes marciales) y Miwa (shogi). Aunque talentosas en sus campos, dependen de su torpe amigo de la infancia, Yuu, para las tareas básicas de la vida diaria.",
        link: "https://crushon.ai/es/character/9d29488e-4f47-413b-8e63-09eb6be8897d/details?shared=true"
    },
    { 
        name: "Hitori Gotoh", 
        sourceAnime: "Bocchi The Rock!", 
        imageUrl: "https://iili.io/f1DWdts.jpg",
        description: "Una guitarrista increíblemente ansiosa y socialmente torpe que brilla en internet como 'Guitarhero'. Se une a Kessoku Band con el sueño de superar su soledad y hacer amigos a través de la música.",
        link: "https://crushon.ai/es/character/d33a7610-1b89-4b16-b172-424b79e1bde5/details?shared=true"
    },
    { 
        name: "Mai Sakurajima", 
        sourceAnime: "Bunny Girl Senpai", 
        imageUrl: "https://iili.io/f1DhCu9.gif",
        description: "Una famosa actriz adolescente afectada por el 'Síndrome de la Pubertad', lo que hace que se vuelva invisible para casi todos. Es madura, ingeniosa y a menudo se burla de Sakuta, la única persona que puede verla.",
        link: "https://crushon.ai/es/character/64dafdb6-8009-47e2-ae7b-162d665d3494/details?shared=true"
    },
    { 
        name: "Kyouka Uzen", 
        sourceAnime: "Mato Seihei no Slave", 
        imageUrl: "https://iili.io/f1Dj0RS.jpg",
        description: "La estoica y poderosa jefa de la 7ª Unidad del Cuerpo Anti-Demonios. Posee la habilidad única de esclavizar a los demonios Shuki para luchar contra la amenaza de Mato, aunque requiere un 'precio' peculiar.",
        link: "https://crushon.ai/es/character/febe9d67-dbbd-4622-96e5-212fb7342a7e/details?shared=true"
    },
    { 
        name: "Tino Shade", 
        sourceAnime: "Nageki no Bourei", 
        imageUrl: "https://iili.io/f1DwsEb.jpg",
        description: "Una cazadora talentosa pero extremadamente tímida y con baja autoestima, a pesar de ser discípula de un maestro de alto nivel. Constantemente lucha contra sus dudas en situaciones peligrosas.",
        link: "https://crushon.ai/es/character/c6e9fc5e-71be-4d87-b8c7-b02f3716dab7/details?shared=true"
    },
    { 
        name: "Lucy Heartfilia", 
        sourceAnime: "Fairy Tail", 
        imageUrl: "https://iili.io/f1DO1ON.jpg",
        description: "Una maga de espíritus celestiales y aspirante a novelista que se une al ruidoso gremio Fairy Tail. Utiliza llaves mágicas para convocar a poderosos espíritus del zodíaco para que luchen a su lado.",
        link: "https://crushon.ai/es/character/9734c59c-d0e6-435b-b1c2-793521aca46a/details?shared=true"
    },
    { 
        name: "Melty Q. Melromarc", 
        sourceAnime: "Shield Hero", 
        imageUrl: "https://iili.io/f1DvdDN.png",
        description: "La segunda princesa de Melromarc, muy diferente a su traicionera hermana mayor. Es madura, diplomática y busca sinceramente reparar las relaciones entre los humanos y los semi-humanos.",
        link: "https://crushon.ai/es/character/9c000e18-3b74-48b6-9eed-37510f50d0b2/details?shared=true"
    },
    { 
        name: "Erika Amano", 
        sourceAnime: "A Couple of Cuckoos", 
        imageUrl: "https://iili.io/f1DvbXS.jpg",
        description: "Una popular celebridad de internet atrapada en un complicado escenario de intercambio de bebés al nacer. Valora su fama en las redes sociales y su independencia por encima de las expectativas tradicionales de su familia.",
        link: "https://crushon.ai/es/character/0fb05e26-5d87-42aa-8f3c-97a91118e855/details?shared=true"
    },
    { 
        name: "Nana Hiiragi", 
        sourceAnime: "Talentless Nana", 
        imageUrl: "https://iili.io/f1DgHrX.png",
        description: "Una estudiante transferida de apariencia alegre con una agenda oculta mortal. Carente de superpoderes reales, utiliza una deducción increíble y la manipulación psicológica para sobrevivir y eliminar a los 'talentosos'.",
        link: "https://crushon.ai/es/character/bf58de3f-17d8-4083-ad67-af5485f332f4/details?shared=true"
    },
    { 
        name: "Ais Wallenstein", 
        sourceAnime: "Danmachi", 
        imageUrl: "https://iili.io/f1Dgpuj.png",
        description: "Conocida como la 'Princesa de la Espada', es una de las aventureras de primera clase más fuertes de Orario, perteneciente a la Familia Loki. Es estoica, centrada y su habilidad con la espada es legendaria.",
        link: "https://crushon.ai/es/character/d8d1981f-c7e9-4b1b-974b-31857c78bf67/details?shared=true"
    },
    { 
        name: "Alisa Mikhailovna", 
        sourceAnime: "Roshidere", 
        imageUrl: "https://iili.io/f1DrpUX.png",
        description: "Una impresionante estudiante de plata del consejo estudiantil que oculta su afecto detrás de una fachada fría. A menudo murmura sus verdaderos sentimientos románticos en ruso, creyendo que nadie la entiende.",
        link: "https://crushon.ai/es/character/42fee014-fa57-4f9e-b0ae-c8b517497ea6/details?shared=true"
    },
    { 
        name: "Mutsumi Yozakura", 
        sourceAnime: "Yozakura Family", 
        imageUrl: "https://iili.io/f1D6OGV.jpg",
        description: "La décima cabeza de la élite familia de espías Yozakura. Aunque no posee habilidades de combate propias, su liderazgo tranquilo y su corazón amable mantienen unida a su caótica y superpoderosa familia.",
        link: "https://crushon.ai/es/character/cc94b8bd-7f95-4335-84c3-a02757cbb2fa/details?shared=true"
    },
    { 
        name: "Becky Blackbell", 
        sourceAnime: "Spy x Family", 
        imageUrl: "https://iili.io/f1DPKc7.jpg",
        description: "La mejor amiga adinerada y algo dramática de Anya Forger en la Academia Eden. Le encantan las historias románticas, intenta actuar con madurez y a menudo malinterpreta las situaciones de forma cómica.",
        link: "https://crushon.ai/es/character/3482e13f-9320-41cd-8644-a819b9a05bd4/details?shared=true"
    },
    { 
        name: "Karane Inda", 
        sourceAnime: "100 Girlfriends", 
        imageUrl: "https://iili.io/f1Diqfp.jpg",
        description: "Una de las novias de Rentarou, definida por su personalidad 'tsundere' extrema. Constantemente lucha por expresar su afecto genuino sin ponerse nerviosa o enojada, aunque sus sentimientos son puros.",
        link: "https://crushon.ai/es/character/78511887-a56d-418a-ba86-37daaecf27ab/details?shared=true"
    },
    { 
        name: "Ameri Azazel", 
        sourceAnime: "Iruma-kun", 
        imageUrl: "https://iili.io/f1DLzoG.jpg",
        description: "La alta, poderosa y estricta Presidenta del Consejo Estudiantil de la Escuela de Demonios Babyls. Secretamente, es una gran fanática del manga romántico humano y sueña con un romance propio.",
        link: "https://crushon.ai/es/character/4d0be4a7-c09b-4cd4-8167-daa8a27994f1/details?shared=true"
    },
    { 
        name: "Kaoruko Waguri", 
        sourceAnime: "Fragrant Flower", 
        // CORREGIDO: URL limpia sin proxy
        imageUrl: "https://iili.io/f1DZ2YN.png",
        description: "Una estudiante gentil y de buen corazón de una prestigiosa escuela para chicas. Se enamora de un chico de la escuela vecina de delincuentes, viendo más allá de las apariencias y los prejuicios.",
        link: "https://crushon.ai/es/character/edeff5ee-f3f5-41ff-9606-7128b783fb5d/details?shared=true"
    },
    { 
        name: "Cha Hae-In", 
        sourceAnime: "Solo Leveling", 
        imageUrl: "https://iili.io/f1DtRlR.png",
        description: "Una cazadora de rango S de élite y Vice-Maestra del Gremio de Cazadores en Corea. Es conocida por su increíble habilidad con la espada, su velocidad y su capacidad única para 'oler' el maná.",
        link: "https://crushon.ai/es/character/837a568a-aa2e-4cfe-9ee0-ae10d2fe8625/details?shared=true"
    },
    { 
        name: "Momo Ayase", 
        sourceAnime: "Dandadan", 
        imageUrl: "https://iili.io/f1DD7qb.png",
        description: "Una audaz chica de secundaria que cree firmemente en los fantasmas pero niega la existencia de los extraterrestres. Se ve arrastrada al caos paranormal después de conocer a Okarun y despertar sus propios poderes psíquicos.",
        link: "https://crushon.ai/es/character/77b33d83-8b9d-4efd-b0cf-9b360b6bd53e/details?shared=true"
    },
    { 
        name: "Ryoba Aishi", 
        sourceAnime: "Yandere Sim", 
        // CORREGIDO: URL limpia sin proxy
        imageUrl: "https://iili.io/f1DbZKJ.png",
        description: "La madre de Ayano Aishi. En su juventud, fue la 'Yandere' original, persiguiendo a su propio Senpai con una obsesión despiadada y eliminando cualquier obstáculo o rival en su camino.",
        link: "https://crushon.ai/es/character/552c2b29-8578-45cd-93f3-9fd8f16b1348/details?shared=true"
    },
    { 
        name: "Megami Saikou", 
        sourceAnime: "Yandere Sim", 
        // CORREGIDO: URL limpia sin proxy
        imageUrl: "https://iili.io/f1Dpodv.png",
        description: "La intocable Presidenta del Consejo Estudiantil y heredera de la poderosa Saikou Corp. Encarna la perfección absoluta, la autoridad y mantiene un estricto control sobre la escuela.",
        link: "https://crushon.ai/es/character/4724cde3-c393-4665-99ac-4d1ff56140ed/details?shared=true"
    },
    { 
        name: "Aqua", 
        sourceAnime: "Konosuba", 
        imageUrl: "https://iili.io/f1boxYN.jpg",
        description: "Una diosa del agua enviada al mundo de fantasía que resulta ser increíblemente quejica, propensa a las deudas y generalmente inútil a pesar de poseer un inmenso poder divino y habilidades de purificación.",
        link: "https://crushon.ai/es/character/ccfa2eaa-f4d2-48b6-83a9-aac1f46b5a27/details?shared=true"
    },
    { 
        name: "The Quintuplets", 
        sourceAnime: "Go-Toubun", 
        // CORREGIDO: URL limpia sin proxy
        imageUrl: "https://iili.io/f1bJmHG.png",
        description: "Cinco hermanas idénticas—Ichika, Nino, Miku, Yotsuba e Itsuki—que comparten una aversión por el estudio. Deben ser tuteladas por Fuutarou Uesugi para evitar reprobar la escuela secundaria.",
        link: "https://crushon.ai/es/character/3fe36111-de82-4590-b53b-91cd7710ec6e/details?shared=true"
    },
    { 
        name: "Ai Hoshino", 
        sourceAnime: "Oshi no Ko", 
        imageUrl: "https://iili.io/f1bdw5G.jpg",
        description: "La carismática e inmensamente popular idol central del grupo B-Komachi. Su brillante personalidad en el escenario ocultaba una vida personal compleja, secreta y, en última instancia, trágica.",
        link: "https://crushon.ai/es/character/04215e16-9171-4082-8e47-013cafb3444d/details?shared=true"
    },
    { 
        name: "Suzune Horikita", 
        sourceAnime: "Classroom of Elite", 
        imageUrl: "https://iili.io/f1b2w41.png",
        description: "Una estudiante distante e inteligente colocada en la Clase D. Su único objetivo es ascender a la Clase A por sus propios méritos para ganar el reconocimiento de su hermano mayor.",
        link: "https://crushon.ai/es/character/5d442963-a07c-4676-845a-16ba96f9cd95/details?shared=true"
    },
    { 
        name: "Torako Koshi", 
        sourceAnime: "Nokotan", 
        imageUrl: "https://iili.io/f1b36Dx.png",
        description: "Una ex-delincuente que intenta desesperadamente vivir una vida normal de secundaria, solo para ser arrastrada constantemente de vuelta al caos por la extraña y absurda chica-ciervo Nokotan.",
        link: "https://crushon.ai/es/character/4c015546-d25e-41b4-8f44-c4fccb51fcd7/details?shared=true"
    },
    { 
        name: "Chisato Nishikigi", 
        sourceAnime: "Lycoris Recoil", 
        imageUrl: "https://iili.io/f1bFlbj.png",
        description: "La agente Lycoris más fuerte de la historia, conocida por usar balas de goma no letales y por su personalidad increíblemente alegre y despreocupada, a pesar de la naturaleza peligrosa de su trabajo.",
        link: "https://crushon.ai/es/character/86d5747b-6cf7-477d-b229-a6e431a64d72/details?shared=true"
    },
    { 
        name: "Akane Tendo", 
        sourceAnime: "Ranma 1/2", 
        imageUrl: "https://iili.io/f1bKRQR.jpg",
        description: "La hija menor del maestro del dojo Tendo y prometida reacia de Ranma Saotome. Es de temperamento fuerte, hábil en artes marciales, pero tiene un lado amable que rara vez muestra.",
        link: "https://crushon.ai/es/character/18b5d967-15cb-4d7e-ba8f-d8ab7acf2546/details?shared=true"
    },
    { 
        name: "Ruby Hoshino", 
        sourceAnime: "Oshi no Ko", 
        imageUrl: "https://iili.io/f1bqUqQ.png",
        description: "La hija de Ai Hoshino y la reencarnación de una fan enfermiza. Aspira apasionadamente a seguir los pasos de su madre y convertirse en una idol superior para cumplir su sueño de toda la vida.",
        link: "https://crushon.ai/es/character/a8552b07-5031-4979-8389-881772a13c12/details?shared=true"
    },
    { 
        name: "Nina", 
        sourceAnime: "TCOAAL", 
        // CORREGIDO: URL limpia sin proxy
        imageUrl: "https://iili.io/f1bBSun.jpg",
        description: "Un personaje central en 'The Coffin of Andy and Leyley'. Su relación con su hermano es profundamente compleja, tóxica y está marcada por la codependencia y temas oscuros de obsesión.",
        link: "https://crushon.ai/es/character/ef9a60ab-58c8-4ea8-a88b-00b3fe68a03b/details?shared=true"
    },
].map((char, index) => ({
    ...char,
    id: index
}));