var APP_VERSION = '1.0.1';

// ════════════════════════════════════════════════
// RADICAUX — lookup table caractère → [symbole, signification fr]
// ════════════════════════════════════════════════
var RADICALS = {
  // ── Pronoms & particules ──────────────────────
  '你':['亻','personne'],  '我':['戈','lance'],    '他':['亻','personne'],
  '她':['女','femme'],     '们':['亻','personne'], '您':['心','cœur'],
  '这':['辶','chemin'],    '那':['阝','colline'],  '什':['亻','personne'],
  '么':['乙','crochet'],   '的':['白','blanc'],    '了':['乙','crochet'],
  '不':['一','un'],        '是':['日','soleil'],   '有':['月','lune'],
  '在':['土','terre'],     '和':['口','bouche'],   '也':['乙','crochet'],
  '都':['阝','colline'],   '很':['彳','pas'],      '吗':['口','bouche'],
  '呢':['口','bouche'],    '啊':['口','bouche'],   '吧':['口','bouche'],
  '没':['氵','eau'],       '可':['口','bouche'],   '以':['人','personne'],
  '能':['厶','privé'],     '会':['人','personne'], '要':['西','ouest'],
  '就':['尢','estropié'],  '还':['辶','chemin'],   '再':['冂','enclos'],
  '又':['又','main'],      '只':['口','bouche'],   '已':['己','soi'],
  '但':['亻','personne'],  '比':['比','comparer'], '最':['日','soleil'],
  '太':['大','grand'],     '真':['目','œil'],      '对':['又','main'],
  '错':['钅','métal'],     '好':['女','femme'],    '行':['行','aller'],
  '因':['囗','enclos'],    '为':['力','force'],    '所':['户','porte'],
  '如':['女','femme'],     '果':['木','bois'],     '虽':['虫','insecte'],
  '然':['灬','feu'],       '经':['纟','fil'],      '特':['牛','bœuf'],
  '别':['刂','couteau'],   '更':['曰','dire'],

  // ── Famille ───────────────────────────────────
  '爸':['父','père'],      '妈':['女','femme'],    '哥':['口','bouche'],
  '姐':['女','femme'],     '弟':['弓','arc'],      '妹':['女','femme'],
  '家':['宀','maison'],    '父':['父','père'],      '母':['毋','mère'],
  '祖':['礻','montrer'],   '奶':['女','femme'],    '爷':['父','père'],
  '兄':['儿','enfant'],    '夫':['大','grand'],    '妻':['女','femme'],
  '儿':['儿','enfant'],    '女':['女','femme'],    '子':['子','enfant'],
  '孩':['子','enfant'],

  // ── Corps humain ─────────────────────────────
  '头':['大','grand'],     '手':['手','main'],     '眼':['目','œil'],
  '耳':['耳','oreille'],   '嘴':['口','bouche'],   '脸':['月','lune'],
  '身':['身','corps'],     '脚':['月','lune'],     '鼻':['鼻','nez'],
  '心':['心','cœur'],      '背':['月','lune'],     '腿':['月','lune'],
  '脖':['月','lune'],      '肩':['月','lune'],     '肚':['月','lune'],
  '牙':['牙','dent'],      '发':['又','main'],     '皮':['皮','peau'],

  // ── Nourriture & boissons ─────────────────────
  '饭':['饣','aliment'],   '面':['面','farine'],   '米':['米','riz'],
  '肉':['肉','viande'],    '鱼':['鱼','poisson'],  '蛋':['虫','insecte'],
  '奶':['女','femme'],     '茶':['艹','plante'],   '水':['水','eau'],
  '汤':['氵','eau'],       '菜':['艹','plante'],   '苹':['艹','plante'],
  '香':['禾','céréale'],   '蕉':['艹','plante'],   '橙':['木','bois'],
  '梨':['木','bois'],      '桃':['木','bois'],     '瓜':['瓜','courge'],
  '豆':['豆','haricot'],   '糖':['米','riz'],      '包':['勹','envelopper'],
  '饺':['饣','aliment'],   '饼':['饣','aliment'],  '饮':['饣','aliment'],
  '料':['斗','boisseau'],  '酒':['氵','eau'],      '咖':['口','bouche'],
  '啡':['口','bouche'],    '汁':['氵','eau'],      '牛':['牛','bœuf'],
  '鸡':['鸟','oiseau'],    '猪':['犭','animal'],   '羊':['羊','mouton'],
  '虾':['虫','insecte'],   '葡':['艹','plante'],   '萄':['艹','plante'],
  '西':['西','ouest'],     '冰':['冫','glace'],    '啤':['口','bouche'],
  '酸':['酉','alcool'],    '辣':['辛','âcre'],     '甜':['甘','doux'],
  '苦':['艹','plante'],    '咸':['戊','armure'],

  // ── Nature ───────────────────────────────────
  '山':['山','montagne'],  '河':['氵','eau'],      '海':['氵','eau'],
  '天':['大','grand'],     '地':['土','terre'],    '风':['风','vent'],
  '雨':['雨','pluie'],     '雪':['雨','pluie'],    '云':['二','deux'],
  '花':['艹','plante'],    '草':['艹','plante'],   '树':['木','bois'],
  '叶':['口','bouche'],    '石':['石','pierre'],   '火':['火','feu'],
  '月':['月','lune'],      '星':['日','soleil'],   '阳':['阝','colline'],
  '阴':['阝','colline'],   '湖':['氵','eau'],      '江':['氵','eau'],
  '池':['氵','eau'],       '岸':['山','montagne'], '森':['木','bois'],
  '林':['木','bois'],      '田':['田','champ'],    '土':['土','terre'],
  '日':['日','soleil'],    '光':['儿','enfant'],   '热':['灬','feu'],

  // ── Objets quotidiens ────────────────────────
  '书':['乙','crochet'],   '本':['木','bois'],     '笔':['⺮','bambou'],
  '纸':['纟','fil'],       '桌':['木','bois'],     '椅':['木','bois'],
  '床':['广','toit'],      '门':['门','porte'],    '窗':['穴','caverne'],
  '灯':['火','feu'],       '话':['讠','parole'],   '视':['礻','montrer'],
  '脑':['月','lune'],      '机':['木','bois'],     '车':['车','voiture'],
  '船':['舟','bateau'],    '钱':['钅','métal'],    '票':['示','montrer'],
  '衣':['衣','vêtement'],  '服':['月','lune'],     '裤':['衤','vêtement'],
  '裙':['衤','vêtement'],  '鞋':['革','cuir'],     '帽':['巾','tissu'],
  '钟':['钅','métal'],     '表':['衣','vêtement'], '镜':['钅','métal'],
  '杯':['木','bois'],      '碗':['石','pierre'],   '盘':['皿','récipient'],
  '刀':['刀','couteau'],   '锅':['钅','métal'],    '药':['艹','plante'],
  '球':['王','roi'],       '伞':['人','personne'], '袋':['衣','vêtement'],
  '柜':['木','bois'],      '箱':['⺮','bambou'],   '瓶':['瓦','tuile'],
  '盒':['皿','récipient'], '钥':['钅','métal'],    '匙':['匕','cuillère'],
  '扇':['户','porte'],     '墙':['土','terre'],    '地':['土','terre'],
  '板':['木','bois'],      '梯':['木','bois'],

  // ── Lieux ────────────────────────────────────
  '国':['囗','enclos'],    '城':['土','terre'],    '市':['巾','tissu'],
  '区':['匸','cache'],     '路':['⻊','pied'],     '街':['行','aller'],
  '楼':['木','bois'],      '站':['立','debout'],   '园':['囗','enclos'],
  '公':['八','huit'],      '里':['里','village'],  '外':['夕','soir'],
  '店':['广','toit'],      '馆':['饣','aliment'],  '场':['土','terre'],
  '校':['木','bois'],      '室':['宀','maison'],   '房':['户','porte'],
  '间':['门','porte'],     '院':['阝','colline'],  '医':['匸','cache'],
  '图':['囗','enclos'],    '书':['乙','crochet'],  '超':['走','marcher'],
  '市':['巾','tissu'],     '餐':['食','nourriture'],'厅':['广','toit'],
  '厨':['广','toit'],      '卧':['臣','ministre'], '客':['宀','maison'],
  '厕':['广','toit'],      '所':['户','porte'],    '银':['钅','métal'],
  '行':['行','aller'],     '邮':['阝','colline'],  '局':['尸','corps'],
  '港':['氵','eau'],       '机':['木','bois'],

  // ── Temps ────────────────────────────────────
  '年':['干','sec'],       '月':['月','lune'],     '日':['日','soleil'],
  '时':['日','soleil'],    '分':['刀','couteau'],  '秒':['禾','céréale'],
  '今':['人','personne'],  '昨':['日','soleil'],   '明':['日','soleil'],
  '早':['日','soleil'],    '晚':['日','soleil'],   '午':['十','dix'],
  '前':['刂','couteau'],   '后':['口','bouche'],   '周':['口','bouche'],
  '期':['月','lune'],      '春':['日','soleil'],   '夏':['夊','pied'],
  '秋':['禾','céréale'],   '冬':['夂','pied'],     '刻':['刂','couteau'],
  '假':['亻','personne'],  '节':['⺮','bambou'],   '号':['口','bouche'],

  // ── Verbes courants ───────────────────────────
  '来':['木','bois'],      '去':['厶','privé'],    '说':['讠','parole'],
  '看':['目','œil'],       '听':['口','bouche'],   '吃':['口','bouche'],
  '喝':['口','bouche'],    '写':['冖','couvercle'],'读':['讠','parole'],
  '学':['子','enfant'],    '买':['乙','crochet'],  '卖':['十','dix'],
  '打':['扌','main'],      '走':['走','marcher'],  '跑':['⻊','pied'],
  '坐':['土','terre'],     '睡':['目','œil'],      '起':['走','marcher'],
  '想':['心','cœur'],      '知':['矢','flèche'],   '道':['辶','chemin'],
  '觉':['见','voir'],      '叫':['口','bouche'],   '问':['门','porte'],
  '答':['⺮','bambou'],    '请':['讠','parole'],   '谢':['讠','parole'],
  '认':['讠','parole'],    '识':['讠','parole'],   '做':['亻','personne'],
  '住':['亻','personne'],  '到':['刂','couteau'],  '让':['讠','parole'],
  '给':['纟','fil'],       '用':['用','utiliser'], '把':['扌','main'],
  '玩':['王','roi'],       '唱':['口','bouche'],   '画':['田','champ'],
  '找':['扌','main'],      '帮':['巾','tissu'],    '带':['巾','tissu'],
  '教':['攴','frapper'],   '等':['⺮','bambou'],   '拿':['手','main'],
  '放':['攴','frapper'],   '换':['扌','main'],     '洗':['氵','eau'],
  '游':['氵','eau'],       '飞':['飞','voler'],    '骑':['马','cheval'],
  '开':['廾','deux mains'],'关':['关','fermer'],  '回':['囗','enclos'],
  '进':['辶','chemin'],    '出':['凵','récipient'],'送':['辶','chemin'],
  '跟':['⻊','pied'],      '借':['亻','personne'], '喜':['口','bouche'],
  '欢':['欠','manquer'],   '爱':['爪','griffe'],   '恨':['忄','cœur'],
  '哭':['口','bouche'],    '笑':['⺮','bambou'],   '说':['讠','parole'],
  '告':['口','bouche'],    '诉':['讠','parole'],   '问':['门','porte'],
  '回':['囗','enclos'],    '答':['⺮','bambou'],   '选':['辶','chemin'],
  '择':['扌','main'],      '决':['冫','glace'],    '定':['宀','maison'],
  '解':['角','corne'],     '决':['冫','glace'],    '帮':['巾','tissu'],
  '忘':['心','cœur'],      '记':['讠','parole'],   '练':['纟','fil'],
  '习':['羽','plume'],     '复':['彳','pas'],      '预':['页','page'],
  '准':['冫','glace'],     '备':['人','personne'], '参':['厶','privé'],
  '加':['力','force'],     '参':['厶','privé'],    '加':['力','force'],
  '休':['亻','personne'],  '息':['心','cœur'],     '睡':['目','œil'],
  '觉':['见','voir'],      '起':['走','marcher'],  '床':['广','toit'],

  // ── Adjectifs ────────────────────────────────
  '大':['大','grand'],     '小':['小','petit'],    '多':['夕','soir'],
  '少':['小','petit'],     '长':['长','long'],     '短':['矢','flèche'],
  '高':['高','haut'],      '低':['亻','personne'], '新':['斤','hache'],
  '旧':['臼','mortier'],   '快':['忄','cœur'],     '慢':['忄','cœur'],
  '冷':['冫','glace'],     '美':['羊','mouton'],   '贵':['贝','coquillage'],
  '难':['又','main'],      '容':['宀','maison'],   '易':['日','soleil'],
  '忙':['忄','cœur'],      '闲':['门','porte'],    '累':['糸','fil'],
  '渴':['氵','eau'],       '饿':['饣','aliment'],  '胖':['月','lune'],
  '瘦':['疒','maladie'],   '矮':['矢','flèche'],   '帅':['巾','tissu'],
  '漂':['氵','eau'],       '亮':['亠','couvercle'],'干':['干','sec'],
  '净':['氵','eau'],       '脏':['月','lune'],     '重':['里','village'],
  '轻':['车','voiture'],   '满':['氵','eau'],      '空':['穴','caverne'],
  '安':['宀','maison'],    '静':['青','bleu'],     '乱':['乙','crochet'],
  '苦':['艹','plante'],    '甜':['甘','doux'],     '辣':['辛','âcre'],
  '鲜':['鱼','poisson'],   '香':['禾','céréale'],  '臭':['自','soi'],
  '软':['车','voiture'],   '硬':['石','pierre'],   '圆':['囗','enclos'],
  '方':['方','carré'],     '平':['干','sec'],      '直':['目','œil'],
  '弯':['弓','arc'],       '厚':['厂','falaise'],  '薄':['艹','plante'],

  // ── Couleurs ─────────────────────────────────
  '红':['纟','fil'],       '绿':['纟','fil'],      '蓝':['艹','plante'],
  '黄':['黄','jaune'],     '白':['白','blanc'],    '黑':['黑','noir'],
  '灰':['火','feu'],       '粉':['米','riz'],      '紫':['糸','fil'],
  '棕':['木','bois'],

  // ── Nombres & mesures ────────────────────────
  '一':['一','un'],        '二':['二','deux'],     '三':['一','un'],
  '四':['囗','enclos'],    '五':['二','deux'],     '六':['八','huit'],
  '七':['一','un'],        '八':['八','huit'],     '九':['乙','crochet'],
  '十':['十','dix'],       '百':['白','blanc'],    '千':['十','dix'],
  '万':['一','un'],        '零':['雨','pluie'],    '两':['入','entrer'],
  '半':['十','dix'],       '第':['⺮','bambou'],   '次':['欠','manquer'],
  '些':['二','deux'],      '每':['毋','mère'],     '各':['口','bouche'],

  // ── École & apprentissage ─────────────────────
  '语':['讠','parole'],    '文':['文','écriture'],  '数':['攴','frapper'],
  '英':['艹','plante'],    '汉':['氵','eau'],      '字':['宀','maison'],
  '词':['讠','parole'],    '句':['口','bouche'],   '课':['讠','parole'],
  '题':['页','page'],      '试':['讠','parole'],   '考':['老','vieux'],
  '作':['亻','personne'],  '业':['一','un'],       '练':['纟','fil'],
  '老':['老','vieux'],     '师':['巾','tissu'],    '生':['生','naître'],
  '同':['囗','enclos'],    '班':['刂','couteau'],  '级':['纟','fil'],
  '成':['戈','lance'],     '绩':['纟','fil'],      '分':['刀','couteau'],
  '数':['攴','frapper'],   '学':['子','enfant'],   '校':['木','bois'],

  // ── Sports & loisirs ─────────────────────────
  '球':['王','roi'],       '足':['⻊','pied'],     '篮':['⺮','bambou'],
  '网':['网','filet'],     '跳':['⻊','pied'],     '舞':['舛','erreur'],
  '音':['音','son'],       '乐':['木','bois'],     '钢':['钅','métal'],
  '琴':['王','roi'],       '影':['彡','poils'],    '戏':['戈','lance'],
  '画':['田','champ'],     '跑':['⻊','pied'],     '游':['氵','eau'],
  '泳':['氵','eau'],       '步':['止','arrêter'],  '拍':['扌','main'],
  '照':['日','soleil'],    '片':['片','planche'],  '旅':['方','carré'],
  '行':['行','aller'],     '游':['氵','eau'],      '览':['见','voir'],

  // ── Transports ───────────────────────────────
  '车':['车','voiture'],   '公':['八','huit'],     '共':['八','huit'],
  '汽':['氵','eau'],       '出':['凵','récipient'],'租':['禾','céréale'],
  '地':['土','terre'],     '铁':['钅','métal'],    '火':['火','feu'],
  '路':['⻊','pied'],      '飞':['飞','voler'],    '机':['木','bois'],
  '船':['舟','bateau'],    '骑':['马','cheval'],   '自':['自','soi'],
  '行':['行','aller'],     '摩':['手','main'],     '托':['扌','main'],

  // ── Santé ────────────────────────────────────
  '病':['疒','maladie'],   '医':['匸','cache'],    '院':['阝','colline'],
  '头':['大','grand'],     '疼':['疒','maladie'],  '痛':['疒','maladie'],
  '感':['心','cœur'],      '冒':['日','soleil'],   '发':['又','main'],
  '烧':['火','feu'],       '咳':['口','bouche'],   '嗽':['口','bouche'],
  '药':['艹','plante'],    '打':['扌','main'],     '针':['钅','métal'],
  '健':['亻','personne'],  '康':['广','toit'],     '身':['身','corps'],
  '体':['亻','personne'],  '重':['里','village'],
};

// ════════════════════════════════════════════════
// EXEMPLES — phrases d'exemple par mot (hanzi → {zh, py, fr})
// ════════════════════════════════════════════════
var EXAMPLES = {

  // ════════ YCT 1 ════════════════════════════════

  // ── Salutations ──────────────────────────────
  "你好":   {zh:"你好，认识你很高兴！",            py:"Nǐ hǎo, rèn shi nǐ hěn gāo xìng!",         fr:"Bonjour, ravi de te connaître !"},
  "谢谢":   {zh:"谢谢你帮助我。",                  py:"Xiè xie nǐ bāng zhù wǒ.",                   fr:"Merci de m'avoir aidé."},
  "再见":   {zh:"再见，明天见！",                  py:"Zài jiàn, míng tiān jiàn!",                 fr:"Au revoir, à demain !"},
  "对不起": {zh:"对不起，我迟到了。",               py:"Duì bu qǐ, wǒ chí dào le.",                 fr:"Désolé, je suis en retard."},
  "不客气": {zh:"不客气，这是我应该做的。",          py:"Bù kè qi, zhè shì wǒ yīng gāi zuò de.",    fr:"De rien, c'est tout naturel."},
  "没关系": {zh:"没关系，不要担心。",               py:"Méi guān xi, bù yào dān xīn.",              fr:"Ce n'est pas grave, ne t'inquiète pas."},

  // ── Pronoms ──────────────────────────────────
  "我":     {zh:"我是法国人，我学中文。",            py:"Wǒ shì Fǎ guó rén, wǒ xué Zhōng wén.",     fr:"Je suis Français, j'apprends le chinois."},
  "你":     {zh:"你叫什么名字？",                  py:"Nǐ jiào shén me míng zi?",                  fr:"Comment tu t'appelles ?"},
  "他":     {zh:"他是我的好朋友。",                 py:"Tā shì wǒ de hǎo péng you.",                fr:"Il est mon bon ami."},
  "她":     {zh:"她是我的老师。",                  py:"Tā shì wǒ de lǎo shī.",                     fr:"Elle est mon professeur."},
  "我们":   {zh:"我们一起去学校。",                 py:"Wǒ men yī qǐ qù xué xiào.",                fr:"Nous allons ensemble à l'école."},
  "你们":   {zh:"你们吃饭了吗？",                  py:"Nǐ men chī fàn le ma?",                     fr:"Avez-vous mangé ?"},
  "他们":   {zh:"他们都是我的同学。",               py:"Tā men dōu shì wǒ de tóng xué.",           fr:"Ils sont tous mes camarades de classe."},

  // ── Chiffres ─────────────────────────────────
  "零":     {zh:"今天气温是零度，很冷。",            py:"Jīn tiān qì wēn shì líng dù, hěn lěng.",   fr:"La température est de zéro degré aujourd'hui, il fait très froid."},
  "一":     {zh:"我有一个姐姐和一个弟弟。",          py:"Wǒ yǒu yī gè jiě jie hé yī gè dì di.",    fr:"J'ai une grande sœur et un petit frère."},
  "二":     {zh:"星期二我们有中文课。",              py:"Xīng qī èr wǒ men yǒu Zhōng wén kè.",     fr:"Nous avons cours de chinois le mardi."},
  "三":     {zh:"我家有三口人。",                   py:"Wǒ jiā yǒu sān kǒu rén.",                  fr:"Ma famille compte trois personnes."},
  "四":     {zh:"我家住在四楼。",                   py:"Wǒ jiā zhù zài sì lóu.",                   fr:"Mon appartement est au quatrième étage."},
  "五":     {zh:"我每天五点起床。",                 py:"Wǒ měi tiān wǔ diǎn qǐ chuáng.",          fr:"Je me lève à cinq heures chaque matin."},
  "六":     {zh:"一个星期有五个工作日，六天有课。",   py:"Yī gè xīng qī yǒu wǔ gè gōng zuò rì.",   fr:"Une semaine a cinq jours ouvrables."},
  "七":     {zh:"一周有七天。",                     py:"Yī zhōu yǒu qī tiān.",                     fr:"Une semaine a sept jours."},
  "八":     {zh:"我今年八岁了。",                   py:"Wǒ jīn nián bā suì le.",                   fr:"J'ai huit ans cette année."},
  "九":     {zh:"他在九月过生日。",                 py:"Tā zài jiǔ yuè guò shēng rì.",             fr:"Il fête son anniversaire en septembre."},
  "十":     {zh:"我有十个好朋友。",                 py:"Wǒ yǒu shí gè hǎo péng you.",             fr:"J'ai dix bons amis."},
  "百":     {zh:"这本书有一百页。",                 py:"Zhè běn shū yǒu yī bǎi yè.",              fr:"Ce livre a cent pages."},
  "千":     {zh:"他家离学校有一千米。",              py:"Tā jiā lí xué xiào yǒu yī qiān mǐ.",      fr:"Sa maison est à mille mètres de l'école."},

  // ── Famille ──────────────────────────────────
  "爸爸":   {zh:"我爸爸是医生。",                   py:"Wǒ bà ba shì yī shēng.",                   fr:"Mon papa est médecin."},
  "妈妈":   {zh:"妈妈在家做饭。",                   py:"Mā ma zài jiā zuò fàn.",                   fr:"Maman cuisine à la maison."},
  "哥哥":   {zh:"我哥哥比我高。",                   py:"Wǒ gē ge bǐ wǒ gāo.",                     fr:"Mon grand frère est plus grand que moi."},
  "姐姐":   {zh:"姐姐喜欢唱歌。",                   py:"Jiě jie xǐ huān chàng gē.",               fr:"Ma grande sœur aime chanter."},
  "弟弟":   {zh:"弟弟今年六岁。",                   py:"Dì di jīn nián liù suì.",                  fr:"Mon petit frère a six ans cette année."},
  "妹妹":   {zh:"妹妹很可爱。",                     py:"Mèi mei hěn kě ài.",                       fr:"Ma petite sœur est très mignonne."},

  // ── Personnes ────────────────────────────────
  "老师":   {zh:"老师教我们中文。",                 py:"Lǎo shī jiāo wǒ men Zhōng wén.",           fr:"Le professeur nous enseigne le chinois."},
  "同学":   {zh:"他是我的同学，也是朋友。",          py:"Tā shì wǒ de tóng xué, yě shì péng you.", fr:"Il est mon camarade de classe et aussi mon ami."},
  "朋友":   {zh:"她是我最好的朋友。",               py:"Tā shì wǒ zuì hǎo de péng you.",           fr:"Elle est ma meilleure amie."},

  // ── Animaux ──────────────────────────────────
  "猫":     {zh:"这只猫很可爱。",                   py:"Zhè zhī māo hěn kě ài.",                   fr:"Ce chat est très mignon."},
  "狗":     {zh:"我家有一只大狗。",                 py:"Wǒ jiā yǒu yī zhī dà gǒu.",               fr:"J'ai un grand chien à la maison."},
  "鸟":     {zh:"树上有一只小鸟在唱歌。",            py:"Shù shang yǒu yī zhī xiǎo niǎo zài chàng gē.",fr:"Il y a un petit oiseau qui chante dans l'arbre."},
  "鱼":     {zh:"水里有很多鱼。",                   py:"Shuǐ lǐ yǒu hěn duō yú.",                 fr:"Il y a beaucoup de poissons dans l'eau."},
  "马":     {zh:"那匹马跑得很快。",                 py:"Nà pǐ mǎ pǎo de hěn kuài.",               fr:"Ce cheval court très vite."},

  // ── Nourriture ───────────────────────────────
  "苹果":   {zh:"我每天吃一个苹果。",               py:"Wǒ měi tiān chī yī gè píng guǒ.",         fr:"Je mange une pomme chaque jour."},
  "水":     {zh:"请给我一杯水。",                   py:"Qǐng gěi wǒ yī bēi shuǐ.",                fr:"Donnez-moi un verre d'eau, s'il vous plaît."},
  "米饭":   {zh:"中国人每天吃米饭。",               py:"Zhōng guó rén měi tiān chī mǐ fàn.",       fr:"Les Chinois mangent du riz tous les jours."},
  "面条":   {zh:"我喜欢吃面条。",                   py:"Wǒ xǐ huān chī miàn tiáo.",               fr:"J'aime manger des nouilles."},
  "好吃":   {zh:"这个菜很好吃！",                   py:"Zhè gè cài hěn hǎo chī!",                 fr:"Ce plat est délicieux !"},

  // ── Adjectifs ────────────────────────────────
  "大":     {zh:"北京是一个很大的城市。",            py:"Běi jīng shì yī gè hěn dà de chéng shì.", fr:"Pékin est une très grande ville."},
  "小":     {zh:"这个盒子太小了。",                 py:"Zhè gè hé zi tài xiǎo le.",               fr:"Cette boîte est trop petite."},
  "好":     {zh:"你好吗？我很好，谢谢！",            py:"Nǐ hǎo ma? Wǒ hěn hǎo, xiè xie!",        fr:"Comment vas-tu ? Je vais très bien, merci !"},
  "多":     {zh:"今天来了很多人。",                 py:"Jīn tiān lái le hěn duō rén.",             fr:"Beaucoup de gens sont venus aujourd'hui."},
  "高兴":   {zh:"我很高兴见到你们。",               py:"Wǒ hěn gāo xìng jiàn dào nǐ men.",        fr:"Je suis content de vous voir."},
  "漂亮":   {zh:"她的裙子很漂亮。",                 py:"Tā de qún zi hěn piào liang.",             fr:"Sa robe est très jolie."},
  "高":     {zh:"这栋楼很高。",                     py:"Zhè dòng lóu hěn gāo.",                    fr:"Cet immeuble est très haut."},

  // ── Temps ────────────────────────────────────
  "今天":   {zh:"今天天气很好，我们去公园吧。",       py:"Jīn tiān tiān qì hěn hǎo, wǒ men qù gōng yuán ba.", fr:"Il fait beau aujourd'hui, allons au parc."},
  "明天":   {zh:"明天我有考试。",                   py:"Míng tiān wǒ yǒu kǎo shì.",               fr:"Demain j'ai un examen."},
  "昨天":   {zh:"昨天我们去看电影了。",              py:"Zuó tiān wǒ men qù kàn diàn yǐng le.",    fr:"Hier nous sommes allés voir un film."},
  "年":     {zh:"今年是哪一年？",                   py:"Jīn nián shì nǎ yī nián?",                fr:"Quelle année sommes-nous ?"},
  "月":     {zh:"这个月有三十天。",                 py:"Zhè gè yuè yǒu sān shí tiān.",            fr:"Ce mois a trente jours."},
  "日":     {zh:"今天是三月一日。",                 py:"Jīn tiān shì sān yuè yī rì.",             fr:"Aujourd'hui c'est le premier mars."},
  "星期":   {zh:"一个星期有七天。",                 py:"Yī gè xīng qī yǒu qī tiān.",             fr:"Une semaine a sept jours."},

  // ── Verbes ───────────────────────────────────
  "去":     {zh:"我们去学校上课。",                 py:"Wǒ men qù xué xiào shàng kè.",            fr:"Nous allons à l'école en cours."},
  "来":     {zh:"他从中国来。",                     py:"Tā cóng Zhōng guó lái.",                   fr:"Il vient de Chine."},
  "看":     {zh:"我喜欢看书。",                     py:"Wǒ xǐ huān kàn shū.",                     fr:"J'aime lire des livres."},
  "吃":     {zh:"你喜欢吃什么？",                   py:"Nǐ xǐ huān chī shén me?",                 fr:"Qu'est-ce que tu aimes manger ?"},
  "喝":     {zh:"天热，多喝水。",                   py:"Tiān rè, duō hē shuǐ.",                   fr:"Il fait chaud, bois beaucoup d'eau."},
  "说":     {zh:"他能说三种语言。",                 py:"Tā néng shuō sān zhǒng yǔ yán.",          fr:"Il peut parler trois langues."},
  "叫":     {zh:"我叫李明，你呢？",                 py:"Wǒ jiào Lǐ Míng, nǐ ne?",                fr:"Je m'appelle Li Ming, et toi ?"},
  "有":     {zh:"我有两个弟弟。",                   py:"Wǒ yǒu liǎng gè dì di.",                  fr:"J'ai deux petits frères."},
  "没有":   {zh:"我没有手机。",                     py:"Wǒ méi yǒu shǒu jī.",                     fr:"Je n'ai pas de téléphone portable."},
  "是":     {zh:"这是我的书包。",                   py:"Zhè shì wǒ de shū bāo.",                  fr:"C'est mon cartable."},
  "在":     {zh:"我在图书馆学习。",                 py:"Wǒ zài tú shū guǎn xué xí.",              fr:"J'étudie à la bibliothèque."},
  "学":     {zh:"我们每天学新汉字。",               py:"Wǒ men měi tiān xué xīn Hàn zì.",         fr:"Nous apprenons de nouveaux caractères chaque jour."},

  // ── Questions ────────────────────────────────
  "什么":   {zh:"这是什么动物？",                   py:"Zhè shì shén me dòng wù?",                fr:"Quel est cet animal ?"},
  "谁":     {zh:"那个人是谁？",                     py:"Nà gè rén shì shéi?",                     fr:"Qui est cette personne ?"},
  "哪":     {zh:"你是哪国人？",                     py:"Nǐ shì nǎ guó rén?",                      fr:"Tu es de quel pays ?"},
  "几":     {zh:"你今年几岁？",                     py:"Nǐ jīn nián jǐ suì?",                     fr:"Tu as quel âge ?"},
  "多少":   {zh:"这个多少钱？",                     py:"Zhè gè duō shao qián?",                   fr:"Combien ça coûte ?"},

  // ── Démonstratifs ────────────────────────────
  "这":     {zh:"这是我的家。",                     py:"Zhè shì wǒ de jiā.",                      fr:"Voici ma maison."},
  "那":     {zh:"那个人是我的老师。",               py:"Nà gè rén shì wǒ de lǎo shī.",            fr:"Cette personne est mon professeur."},

  // ── Particules / Adverbes ─────────────────────
  "不":     {zh:"我不喜欢吃辣的。",                 py:"Wǒ bù xǐ huān chī là de.",               fr:"Je n'aime pas manger épicé."},

  // ── Divers YCT1 ──────────────────────────────
  "书":     {zh:"这本书很有意思。",                 py:"Zhè běn shū hěn yǒu yì si.",              fr:"Ce livre est très intéressant."},
  "人":     {zh:"这里有很多人。",                   py:"Zhè lǐ yǒu hěn duō rén.",                 fr:"Il y a beaucoup de gens ici."},
  "中国":   {zh:"中国有很多名胜古迹。",              py:"Zhōng guó yǒu hěn duō míng shèng gǔ jì.", fr:"La Chine a de nombreux sites historiques."},

  // ════════ YCT 2 ════════════════════════════════

  // ── Lieux ────────────────────────────────────
  "学校":   {zh:"我们的学校很大，有很多学生。",       py:"Wǒ men de xué xiào hěn dà, yǒu hěn duō xué shēng.", fr:"Notre école est grande et accueille beaucoup d'élèves."},
  "家":     {zh:"放学后我回家。",                   py:"Fàng xué hòu wǒ huí jiā.",                fr:"Je rentre à la maison après l'école."},
  "医院":   {zh:"我爸爸在医院工作。",               py:"Wǒ bà ba zài yī yuàn gōng zuò.",          fr:"Mon papa travaille à l'hôpital."},
  "商店":   {zh:"我去商店买东西。",                 py:"Wǒ qù shāng diàn mǎi dōng xi.",           fr:"Je vais au magasin faire des courses."},
  "公园":   {zh:"我们在公园散步。",                 py:"Wǒ men zài gōng yuán sàn bù.",            fr:"Nous nous promenons dans le parc."},
  "饭馆":   {zh:"我们去饭馆吃饭吧。",               py:"Wǒ men qù fàn guǎn chī fàn ba.",          fr:"Allons manger au restaurant."},
  "教室":   {zh:"学生们在教室里学习。",              py:"Xué sheng men zài jiào shì lǐ xué xí.",   fr:"Les élèves étudient dans la salle de classe."},
  "超市":   {zh:"妈妈去超市买蔬菜。",               py:"Mā ma qù chāo shì mǎi shū cài.",          fr:"Maman va au supermarché acheter des légumes."},

  // ── Verbes YCT2 ──────────────────────────────
  "喜欢":   {zh:"我喜欢学中文，也喜欢吃中国菜。",    py:"Wǒ xǐ huān xué Zhōng wén, yě xǐ huān chī Zhōng guó cài.", fr:"J'aime apprendre le chinois et manger de la cuisine chinoise."},
  "想":     {zh:"我想去中国旅行。",                 py:"Wǒ xiǎng qù Zhōng guó lǚ xíng.",         fr:"Je veux voyager en Chine."},
  "知道":   {zh:"你知道他在哪里吗？",               py:"Nǐ zhī dào tā zài nǎ lǐ ma?",            fr:"Tu sais où il est ?"},
  "听":     {zh:"我喜欢听音乐。",                   py:"Wǒ xǐ huān tīng yīn yuè.",               fr:"J'aime écouter de la musique."},
  "写":     {zh:"她用中文写了一封信。",              py:"Tā yòng Zhōng wén xiě le yī fēng xìn.",  fr:"Elle a écrit une lettre en chinois."},
  "读":     {zh:"他每天读书两个小时。",              py:"Tā měi tiān dú shū liǎng gè xiǎo shí.",  fr:"Il lit deux heures par jour."},
  "做":     {zh:"妈妈在厨房做饭。",                 py:"Mā ma zài chú fáng zuò fàn.",             fr:"Maman cuisine dans la cuisine."},
  "玩":     {zh:"孩子们在操场上玩。",               py:"Hái zi men zài cāo chǎng shang wán.",     fr:"Les enfants jouent dans la cour."},
  "睡觉":   {zh:"我每天晚上十点睡觉。",              py:"Wǒ měi tiān wǎn shang shí diǎn shuì jiào.", fr:"Je me couche à dix heures du soir."},
  "起床":   {zh:"我每天早上七点起床。",              py:"Wǒ měi tiān zǎo shang qī diǎn qǐ chuáng.", fr:"Je me lève à sept heures du matin."},
  "坐":     {zh:"请坐，不要客气。",                 py:"Qǐng zuò, bù yào kè qi.",                 fr:"Asseyez-vous, faites comme chez vous."},
  "走":     {zh:"我们走路去学校。",                 py:"Wǒ men zǒu lù qù xué xiào.",              fr:"Nous allons à l'école à pied."},
  "买":     {zh:"我要去商店买苹果。",               py:"Wǒ yào qù shāng diàn mǎi píng guǒ.",     fr:"Je vais au magasin acheter des pommes."},
  "卖":     {zh:"这家店卖各种零食。",               py:"Zhè jiā diàn mài gè zhǒng líng shí.",    fr:"Ce magasin vend toutes sortes de snacks."},
  "跑":     {zh:"他每天早上跑步锻炼。",              py:"Tā měi tiān zǎo shang pǎo bù duàn liàn.", fr:"Il court chaque matin pour faire de l'exercice."},
  "站":     {zh:"请站起来回答问题。",               py:"Qǐng zhàn qǐ lái huí dá wèn tí.",        fr:"Lève-toi pour répondre à la question."},
  "回":     {zh:"我放学后回家。",                   py:"Wǒ fàng xué hòu huí jiā.",               fr:"Je rentre chez moi après l'école."},
  "唱":     {zh:"她唱歌唱得很好听。",               py:"Tā chàng gē chàng de hěn hǎo tīng.",     fr:"Elle chante très bien."},
  "画":     {zh:"我喜欢画花和树。",                 py:"Wǒ xǐ huān huà huā hé shù.",              fr:"J'aime dessiner des fleurs et des arbres."},
  "打电话": {zh:"我给妈妈打电话。",                 py:"Wǒ gěi mā ma dǎ diàn huà.",              fr:"J'appelle maman."},
  "回答":   {zh:"老师提问，学生回答。",              py:"Lǎo shī tí wèn, xué shēng huí dá.",      fr:"Le professeur pose une question, l'élève répond."},

  // ── Jours de la semaine ───────────────────────
  "星期一": {zh:"星期一我们有语文课。",              py:"Xīng qī yī wǒ men yǒu yǔ wén kè.",       fr:"Le lundi nous avons cours de chinois."},
  "星期二": {zh:"星期二下午有体育课。",              py:"Xīng qī èr xià wǔ yǒu tǐ yù kè.",        fr:"Mardi après-midi nous avons cours de sport."},
  "星期三": {zh:"星期三我去学画画。",               py:"Xīng qī sān wǒ qù xué huà huà.",         fr:"Mercredi je vais apprendre à dessiner."},
  "星期四": {zh:"星期四我们做作业。",               py:"Xīng qī sì wǒ men zuò zuò yè.",          fr:"Jeudi nous faisons nos devoirs."},
  "星期五": {zh:"星期五是我最喜欢的一天。",          py:"Xīng qī wǔ shì wǒ zuì xǐ huān de yī tiān.", fr:"Le vendredi est mon jour préféré."},
  "星期六": {zh:"星期六我和朋友去公园玩。",          py:"Xīng qī liù wǒ hé péng you qù gōng yuán wán.", fr:"Samedi je vais au parc avec des amis."},
  "星期天": {zh:"星期天全家一起吃饭。",              py:"Xīng qī tiān quán jiā yī qǐ chī fàn.",   fr:"Le dimanche toute la famille mange ensemble."},

  // ── Moments de la journée ─────────────────────
  "早上":   {zh:"早上我喝牛奶吃面包。",             py:"Zǎo shang wǒ hē niú nǎi chī miàn bāo.",  fr:"Le matin je bois du lait et mange du pain."},
  "上午":   {zh:"上午我们有三节课。",               py:"Shàng wǔ wǒ men yǒu sān jié kè.",        fr:"Nous avons trois cours le matin."},
  "中午":   {zh:"中午我们在学校吃饭。",              py:"Zhōng wǔ wǒ men zài xué xiào chī fàn.",  fr:"À midi nous mangeons à l'école."},
  "下午":   {zh:"下午我去踢足球。",                 py:"Xià wǔ wǒ qù tī zú qiú.",               fr:"L'après-midi je joue au football."},
  "晚上":   {zh:"晚上全家一起看电视。",              py:"Wǎn shang quán jiā yī qǐ kàn diàn shì.", fr:"Le soir toute la famille regarde la télé ensemble."},
  "现在":   {zh:"现在几点了？",                     py:"Xiàn zài jǐ diǎn le?",                   fr:"Quelle heure est-il maintenant ?"},
  "以前":   {zh:"以前我不喜欢吃蔬菜。",              py:"Yǐ qián wǒ bù xǐ huān chī shū cài.",    fr:"Avant je n'aimais pas manger des légumes."},
  "以后":   {zh:"以后我想当医生。",                 py:"Yǐ hòu wǒ xiǎng dāng yī shēng.",        fr:"Plus tard je veux devenir médecin."},

  // ── Nourriture YCT2 ──────────────────────────
  "鸡蛋":   {zh:"早饭我吃了两个鸡蛋。",             py:"Zǎo fàn wǒ chī le liǎng gè jī dàn.",    fr:"Au petit-déjeuner j'ai mangé deux œufs."},
  "牛奶":   {zh:"每天喝牛奶对身体好。",              py:"Měi tiān hē niú nǎi duì shēn tǐ hǎo.",  fr:"Boire du lait chaque jour est bon pour la santé."},
  "茶":     {zh:"中国人很喜欢喝茶。",               py:"Zhōng guó rén hěn xǐ huān hē chá.",     fr:"Les Chinois aiment beaucoup boire du thé."},
  "果汁":   {zh:"我要一杯橙汁，谢谢。",              py:"Wǒ yào yī bēi chéng zhī, xiè xie.",     fr:"Je voudrais un jus d'orange, merci."},
  "面包":   {zh:"我每天早上吃面包。",               py:"Wǒ měi tiān zǎo shang chī miàn bāo.",   fr:"Je mange du pain chaque matin."},
  "饺子":   {zh:"过年的时候我们吃饺子。",            py:"Guò nián de shí hou wǒ men chī jiǎo zi.", fr:"Pour le Nouvel An chinois, nous mangeons des raviolis."},
  "肉":     {zh:"他不吃肉，他是素食者。",            py:"Tā bù chī ròu, tā shì sù shí zhě.",     fr:"Il ne mange pas de viande, il est végétarien."},
  "蔬菜":   {zh:"多吃蔬菜对身体好。",               py:"Duō chī shū cài duì shēn tǐ hǎo.",      fr:"Manger beaucoup de légumes est bon pour la santé."},
  "香蕉":   {zh:"猴子最喜欢吃香蕉。",               py:"Hóu zi zuì xǐ huān chī xiāng jiāo.",    fr:"Les singes adorent les bananes."},
  "西瓜":   {zh:"夏天吃西瓜很解暑。",               py:"Xià tiān chī xī guā hěn jiě shǔ.",      fr:"La pastèque est très rafraîchissante en été."},
  "葡萄":   {zh:"这些葡萄又甜又好吃。",              py:"Zhè xiē pú tao yòu tián yòu hǎo chī.",  fr:"Ces raisins sont à la fois sucrés et délicieux."},
  "橙子":   {zh:"我买了五个橙子。",                 py:"Wǒ mǎi le wǔ gè chéng zi.",             fr:"J'ai acheté cinq oranges."},

  // ── Couleurs ─────────────────────────────────
  "红色":   {zh:"中国国旗是红色的。",               py:"Zhōng guó guó qí shì hóng sè de.",      fr:"Le drapeau chinois est rouge."},
  "黄色":   {zh:"这朵花是黄色的。",                 py:"Zhè duǒ huā shì huáng sè de.",           fr:"Cette fleur est jaune."},
  "蓝色":   {zh:"天空是蓝色的。",                   py:"Tiān kōng shì lán sè de.",               fr:"Le ciel est bleu."},
  "绿色":   {zh:"树叶是绿色的。",                   py:"Shù yè shì lǜ sè de.",                   fr:"Les feuilles des arbres sont vertes."},
  "白色":   {zh:"雪是白色的。",                     py:"Xuě shì bái sè de.",                     fr:"La neige est blanche."},
  "黑色":   {zh:"他穿了一件黑色的衬衫。",            py:"Tā chuān le yī jiàn hēi sè de chèn shān.", fr:"Il porte une chemise noire."},
  "粉色":   {zh:"她最喜欢粉色。",                   py:"Tā zuì xǐ huān fěn sè.",                 fr:"Elle préfère la couleur rose."},

  // ── Adjectifs YCT2 ───────────────────────────
  "热":     {zh:"今天很热，我想喝冷饮。",            py:"Jīn tiān hěn rè, wǒ xiǎng hē lěng yǐn.", fr:"Il fait très chaud aujourd'hui, je veux boire quelque chose de froid."},
  "冷":     {zh:"冬天很冷，要多穿衣服。",            py:"Dōng tiān hěn lěng, yào duō chuān yī fu.", fr:"Il fait très froid en hiver, il faut bien s'habiller."},
  "贵":     {zh:"这件衣服太贵了，我买不起。",        py:"Zhè jiàn yī fu tài guì le, wǒ mǎi bù qǐ.", fr:"Ce vêtement est trop cher, je ne peux pas me le permettre."},
  "便宜":   {zh:"这家超市的东西很便宜。",            py:"Zhè jiā chāo shì de dōng xi hěn pián yi.", fr:"Les articles dans ce supermarché sont bon marché."},
  "新":     {zh:"我买了一双新鞋。",                 py:"Wǒ mǎi le yī shuāng xīn xié.",          fr:"J'ai acheté une nouvelle paire de chaussures."},
  "旧":     {zh:"这本书很旧，但很有用。",            py:"Zhè běn shū hěn jiù, dàn hěn yǒu yòng.", fr:"Ce livre est vieux mais très utile."},
  "快":     {zh:"他跑得很快。",                     py:"Tā pǎo de hěn kuài.",                    fr:"Il court très vite."},
  "慢":     {zh:"乌龟走得很慢。",                   py:"Wū guī zǒu de hěn màn.",                 fr:"La tortue marche très lentement."},
  "长":     {zh:"这条河很长。",                     py:"Zhè tiáo hé hěn cháng.",                 fr:"Cette rivière est très longue."},
  "短":     {zh:"今天的课很短。",                   py:"Jīn tiān de kè hěn duǎn.",               fr:"Le cours d'aujourd'hui est très court."},
  "难":     {zh:"这道题很难，我不会做。",            py:"Zhè dào tí hěn nán, wǒ bù huì zuò.",    fr:"Ce problème est très difficile, je n'arrive pas à le résoudre."},
  "容易":   {zh:"这个问题很容易回答。",              py:"Zhè gè wèn tí hěn róng yì huí dá.",     fr:"Cette question est très facile à répondre."},

  // ── Transports ───────────────────────────────
  "汽车":       {zh:"爸爸开汽车送我上学。",          py:"Bà ba kāi qì chē sòng wǒ shàng xué.",   fr:"Papa m'amène à l'école en voiture."},
  "公共汽车":   {zh:"我坐公共汽车去学校。",          py:"Wǒ zuò gōng gòng qì chē qù xué xiào.",  fr:"Je prends le bus pour aller à l'école."},
  "自行车":     {zh:"哥哥骑自行车去上班。",          py:"Gē ge qí zì xíng chē qù shàng bān.",    fr:"Mon grand frère va au travail à vélo."},
  "火车":       {zh:"我们坐火车去北京。",            py:"Wǒ men zuò huǒ chē qù Běi jīng.",       fr:"Nous prenons le train pour aller à Pékin."},
  "飞机":       {zh:"我第一次坐飞机很兴奋。",        py:"Wǒ dì yī cì zuò fēi jī hěn xīng fèn.", fr:"Je suis excité de prendre l'avion pour la première fois."},

  // ── Corps ────────────────────────────────────
  "头":     {zh:"我头疼，想休息一下。",              py:"Wǒ tóu téng, xiǎng xiū xi yī xià.",     fr:"J'ai mal à la tête, je veux me reposer."},
  "眼睛":   {zh:"她有一双大眼睛。",                 py:"Tā yǒu yī shuāng dà yǎn jīng.",         fr:"Elle a de grands yeux."},
  "鼻子":   {zh:"冬天冷，我鼻子不舒服。",            py:"Dōng tiān lěng, wǒ bí zi bù shū fu.",   fr:"En hiver il fait froid, j'ai le nez qui coule."},
  "嘴":     {zh:"吃东西的时候不要说话。",            py:"Chī dōng xi de shí hou bù yào shuō huà.", fr:"Ne parle pas la bouche pleine."},
  "耳朵":   {zh:"我的耳朵听到了音乐声。",            py:"Wǒ de ěr duo tīng dào le yīn yuè shēng.", fr:"Mes oreilles ont entendu de la musique."},
  "手":     {zh:"洗手后再吃东西。",                 py:"Xǐ shǒu hòu zài chī dōng xi.",           fr:"Lave-toi les mains avant de manger."},
  "脚":     {zh:"我的脚有点痛。",                   py:"Wǒ de jiǎo yǒu diǎn tòng.",             fr:"Mon pied me fait un peu mal."},

  // ── Météo ────────────────────────────────────
  "天气":   {zh:"今天天气很好，阳光明媚。",           py:"Jīn tiān tiān qì hěn hǎo, yáng guāng míng mèi.", fr:"Le temps est très beau aujourd'hui, le soleil brille."},
  "晴天":   {zh:"晴天我们去公园玩。",               py:"Qíng tiān wǒ men qù gōng yuán wán.",     fr:"Par beau temps nous allons jouer au parc."},
  "下雨":   {zh:"外面下雨了，记得带伞。",            py:"Wài miàn xià yǔ le, jì de dài sǎn.",    fr:"Il pleut dehors, n'oublie pas ton parapluie."},
  "下雪":   {zh:"冬天下雪，我们堆雪人。",            py:"Dōng tiān xià xuě, wǒ men duī xuě rén.", fr:"En hiver il neige, nous faisons des bonhommes de neige."},
  "风":     {zh:"今天风很大，戴好帽子。",            py:"Jīn tiān fēng hěn dà, dài hǎo mào zi.",  fr:"Il y a beaucoup de vent aujourd'hui, mets bien ton chapeau."},

  // ── Famille YCT2 ─────────────────────────────
  "爷爷":   {zh:"爷爷每天早上打太极拳。",            py:"Yé ye měi tiān zǎo shang dǎ tài jí quán.", fr:"Grand-père pratique le tai-chi tous les matins."},
  "奶奶":   {zh:"奶奶给我们做了好吃的饺子。",        py:"Nǎi nai gěi wǒ men zuò le hǎo chī de jiǎo zi.", fr:"Grand-mère nous a fait de délicieux raviolis."},
  "外公":   {zh:"外公很喜欢钓鱼。",                 py:"Wài gōng hěn xǐ huān diào yú.",          fr:"Grand-père maternel aime beaucoup la pêche."},
  "外婆":   {zh:"外婆给我们讲故事。",               py:"Wài pó gěi wǒ men jiǎng gù shi.",        fr:"Grand-mère maternelle nous raconte des histoires."},
  "儿子":   {zh:"他的儿子今年八岁。",               py:"Tā de ér zi jīn nián bā suì.",           fr:"Son fils a huit ans cette année."},

  // ── Loisirs ──────────────────────────────────
  "音乐":   {zh:"我每天听音乐放松心情。",            py:"Wǒ měi tiān tīng yīn yuè fàng sōng xīn qíng.", fr:"J'écoute de la musique chaque jour pour me détendre."},
  "电影":   {zh:"周末我们去看电影。",               py:"Zhōu mò wǒ men qù kàn diàn yǐng.",      fr:"Le week-end nous allons voir un film."},
  "运动":   {zh:"运动对身体很有好处。",              py:"Yùn dòng duì shēn tǐ hěn yǒu hǎo chù.", fr:"Le sport est très bénéfique pour la santé."},
  "游泳":   {zh:"夏天我喜欢去游泳。",               py:"Xià tiān wǒ xǐ huān qù yóu yǒng.",      fr:"En été j'aime aller nager."},
  "足球":   {zh:"他是我们班的足球明星。",            py:"Tā shì wǒ men bān de zú qiú míng xīng.", fr:"Il est la star de football de notre classe."},

  // ── Adverbes ─────────────────────────────────
  "也":     {zh:"我喜欢中文，也喜欢历史。",          py:"Wǒ xǐ huān Zhōng wén, yě xǐ huān lì shǐ.", fr:"J'aime le chinois et j'aime aussi l'histoire."},
  "都":     {zh:"我们都是同学。",                   py:"Wǒ men dōu shì tóng xué.",               fr:"Nous sommes tous camarades de classe."},
  "很":     {zh:"这道题很难，我做不出来。",          py:"Zhè dào tí hěn nán, wǒ zuò bù chū lái.", fr:"Ce problème est très difficile, je n'arrive pas à le résoudre."},
  "太":     {zh:"今天太冷了，我不想出门。",          py:"Jīn tiān tài lěng le, wǒ bù xiǎng chū mén.", fr:"Il fait trop froid aujourd'hui, je ne veux pas sortir."},
  "非常":   {zh:"她唱歌唱得非常好听。",              py:"Tā chàng gē chàng de fēi cháng hǎo tīng.", fr:"Elle chante extrêmement bien."},
  "一起":   {zh:"我们一起去图书馆学习。",            py:"Wǒ men yī qǐ qù tú shū guǎn xué xí.",   fr:"Allons étudier ensemble à la bibliothèque."},

  // ── Positions ────────────────────────────────
  "上面":   {zh:"书在桌子上面。",                   py:"Shū zài zhuō zi shàng miàn.",            fr:"Le livre est sur la table."},
  "下面":   {zh:"猫在椅子下面睡觉。",               py:"Māo zài yǐ zi xià miàn shuì jiào.",      fr:"Le chat dort sous la chaise."},
  "前面":   {zh:"学校前面有一个公园。",              py:"Xué xiào qián miàn yǒu yī gè gōng yuán.", fr:"Il y a un parc devant l'école."},
  "后面":   {zh:"图书馆在学校后面。",               py:"Tú shū guǎn zài xué xiào hòu miàn.",     fr:"La bibliothèque est derrière l'école."},

  // ── Divers YCT2 ──────────────────────────────
  "名字":   {zh:"你的名字怎么写？",                 py:"Nǐ de míng zi zěn me xiě?",              fr:"Comment s'écrit ton prénom ?"},
  "电话":   {zh:"请告诉我你的电话号码。",            py:"Qǐng gào su wǒ nǐ de diàn huà hào mǎ.", fr:"Dis-moi ton numéro de téléphone, s'il te plaît."},
  "电脑":   {zh:"我用电脑做作业。",                 py:"Wǒ yòng diàn nǎo zuò zuò yè.",          fr:"J'utilise l'ordinateur pour faire mes devoirs."},
  "钱":     {zh:"买东西要付钱。",                   py:"Mǎi dōng xi yào fù qián.",               fr:"Il faut payer pour acheter des choses."},
  "时间":   {zh:"我没有时间看电视。",               py:"Wǒ méi yǒu shí jiān kàn diàn shì.",     fr:"Je n'ai pas le temps de regarder la télé."},
  "衣服":   {zh:"天冷了要多穿衣服。",               py:"Tiān lěng le yào duō chuān yī fu.",      fr:"Il fait froid, il faut bien s'habiller."},
  "桌子":   {zh:"作业放在桌子上。",                 py:"Zuò yè fàng zài zhuō zi shàng.",        fr:"Les devoirs sont posés sur la table."},
  "椅子":   {zh:"请把椅子搬过来。",                 py:"Qǐng bǎ yǐ zi bān guò lái.",            fr:"S'il vous plaît, apportez la chaise."},
  "床":     {zh:"我的床很舒服。",                   py:"Wǒ de chuáng hěn shū fu.",               fr:"Mon lit est très confortable."},
  "照片":   {zh:"这是我们全家的照片。",              py:"Zhè shì wǒ men quán jiā de zhào piàn.", fr:"Voici la photo de toute ma famille."},
  "礼物":   {zh:"生日时我收到了很多礼物。",          py:"Shēng rì shí wǒ shōu dào le hěn duō lǐ wù.", fr:"Pour mon anniversaire j'ai reçu beaucoup de cadeaux."},
  "节日":   {zh:"春节是中国最重要的节日。",          py:"Chūn jié shì Zhōng guó zuì zhòng yào de jié rì.", fr:"La fête du Printemps est la fête la plus importante en Chine."},
  "汉语":   {zh:"我在学校学汉语。",                 py:"Wǒ zài xué xiào xué Hàn yǔ.",           fr:"J'apprends le chinois à l'école."},

  // ════════ YCT 3 ════════════════════════════════

  // ── Lieux ────────────────────────────────────
  "城市":   {zh:"我住在一个很大的城市。",            py:"Wǒ zhù zài yī gè hěn dà de chéng shì.",  fr:"Je vis dans une grande ville."},
  "农村":   {zh:"我爷爷住在农村。",                 py:"Wǒ yé ye zhù zài nóng cūn.",             fr:"Mon grand-père vit à la campagne."},
  "机场":   {zh:"飞机从机场起飞。",                 py:"Fēi jī cóng jī chǎng qǐ fēi.",          fr:"L'avion décolle de l'aéroport."},
  "火车站": {zh:"我们在火车站见面吧。",              py:"Wǒ men zài huǒ chē zhàn jiàn miàn ba.",  fr:"Retrouvons-nous à la gare."},
  "银行":   {zh:"我去银行换钱。",                   py:"Wǒ qù yín háng huàn qián.",              fr:"Je vais à la banque changer de l'argent."},
  "图书馆": {zh:"我在图书馆看书。",                 py:"Wǒ zài tú shū guǎn kàn shū.",            fr:"Je lis à la bibliothèque."},
  "饭店":   {zh:"我们在饭店里吃晚饭。",             py:"Wǒ men zài fàn diàn lǐ chī wǎn fàn.",   fr:"Nous dînons au restaurant."},
  "博物馆": {zh:"博物馆里有很多古代文物。",          py:"Bó wù guǎn lǐ yǒu hěn duō gǔ dài wén wù.", fr:"Le musée abrite de nombreuses antiquités."},

  // ── Métiers ───────────────────────────────────
  "工作":   {zh:"我爸爸每天工作很忙。",             py:"Wǒ bà ba měi tiān gōng zuò hěn máng.",   fr:"Mon père est très occupé au travail chaque jour."},
  "工程师": {zh:"我的梦想是成为工程师。",            py:"Wǒ de mèng xiǎng shì chéng wéi gōng chéng shī.", fr:"Mon rêve est de devenir ingénieur."},
  "经理":   {zh:"经理今天不在办公室。",             py:"Jīng lǐ jīn tiān bú zài bàn gōng shì.", fr:"Le directeur n'est pas au bureau aujourd'hui."},
  "律师":   {zh:"他是一位有名的律师。",             py:"Tā shì yī wèi yǒu míng de lǜ shī.",     fr:"Il est un avocat renommé."},
  "护士":   {zh:"护士很耐心地照顾病人。",           py:"Hù shi hěn nài xīn de zhào gù bìng rén.", fr:"L'infirmière prend soin des patients avec patience."},
  "警察":   {zh:"警察帮助了迷路的小孩。",           py:"Jǐng chá bāng zhù le mí lù de xiǎo hái.", fr:"Le policier a aidé l'enfant perdu."},
  "司机":   {zh:"出租车司机很友好。",               py:"Chū zū chē sī jī hěn yǒu hǎo.",         fr:"Le chauffeur de taxi est très sympathique."},
  "厨师":   {zh:"这位厨师做的菜很好吃。",           py:"Zhè wèi chú shī zuò de cài hěn hǎo chī.", fr:"Les plats préparés par ce cuisinier sont délicieux."},
  "演员":   {zh:"她是一个受欢迎的演员。",           py:"Tā shì yī gè shòu huān yíng de yǎn yuán.", fr:"C'est une actrice très appréciée."},

  // ── Voyage ───────────────────────────────────
  "旅游":   {zh:"我喜欢去不同的地方旅游。",         py:"Wǒ xǐ huān qù bù tóng de dì fang lǚ yóu.", fr:"J'aime voyager dans des endroits différents."},
  "护照":   {zh:"出国旅行要带护照。",               py:"Chū guó lǚ xíng yào dài hù zhào.",       fr:"Il faut avoir un passeport pour voyager à l'étranger."},
  "行李":   {zh:"我的行李太重了。",                 py:"Wǒ de xíng lǐ tài zhòng le.",            fr:"Mes bagages sont trop lourds."},
  "地图":   {zh:"我用地图找路。",                   py:"Wǒ yòng dì tú zhǎo lù.",                fr:"J'utilise une carte pour trouver mon chemin."},
  "签证":   {zh:"去中国需要签证吗？",               py:"Qù Zhōng guó xū yào qiān zhèng ma?",    fr:"Faut-il un visa pour aller en Chine ?"},
  "出发":   {zh:"我们明天早上八点出发。",           py:"Wǒ men míng tiān zǎo shang bā diǎn chū fā.", fr:"Nous partons demain matin à huit heures."},
  "到达":   {zh:"飞机几点到达北京？",               py:"Fēi jī jǐ diǎn dào dá Běi jīng?",       fr:"À quelle heure l'avion arrive-t-il à Pékin ?"},
  "旅行":   {zh:"我们计划去欧洲旅行。",             py:"Wǒ men jì huà qù Ōu zhōu lǚ xíng.",     fr:"Nous prévoyons de voyager en Europe."},

  // ── Nature ───────────────────────────────────
  "气候":   {zh:"这里的气候很舒适。",               py:"Zhè lǐ de qì hòu hěn shū shì.",         fr:"Le climat ici est très agréable."},
  "山":     {zh:"我们爬上了那座很高的山。",         py:"Wǒ men pá shàng le nà zuò hěn gāo de shān.", fr:"Nous avons gravi cette haute montagne."},
  "河":     {zh:"这条河很长，水很清。",             py:"Zhè tiáo hé hěn cháng, shuǐ hěn qīng.", fr:"Cette rivière est longue et l'eau est claire."},
  "海":     {zh:"夏天我们去海边游泳。",             py:"Xià tiān wǒ men qù hǎi biān yóu yǒng.", fr:"En été nous allons nager à la mer."},
  "森林":   {zh:"森林里有很多动物。",               py:"Sēn lín lǐ yǒu hěn duō dòng wù.",       fr:"Il y a beaucoup d'animaux dans la forêt."},
  "花":     {zh:"春天公园里开了很多花。",           py:"Chūn tiān gōng yuán lǐ kāi le hěn duō huā.", fr:"Au printemps, de nombreuses fleurs s'épanouissent dans le parc."},
  "树":     {zh:"院子里有一棵大树。",               py:"Yuàn zi lǐ yǒu yī kē dà shù.",          fr:"Il y a un grand arbre dans la cour."},
  "天空":   {zh:"今天天空很蓝。",                   py:"Jīn tiān tiān kōng hěn lán.",            fr:"Le ciel est très bleu aujourd'hui."},
  "月亮":   {zh:"中秋节的月亮很圆。",               py:"Zhōng qiū jié de yuè liang hěn yuán.",   fr:"La lune est ronde à la fête de la Mi-Automne."},

  // ── Saisons ──────────────────────────────────
  "春天":   {zh:"春天来了，天气暖和了。",           py:"Chūn tiān lái le, tiān qì nuǎn huo le.", fr:"Le printemps est arrivé, il fait plus doux."},
  "夏天":   {zh:"夏天天气很热，我们喜欢游泳。",     py:"Xià tiān tiān qì hěn rè, wǒ men xǐ huān yóu yǒng.", fr:"En été il fait très chaud, nous aimons nager."},
  "秋天":   {zh:"秋天树叶变黄了。",                 py:"Qiū tiān shù yè biàn huáng le.",         fr:"En automne les feuilles jaunissent."},
  "冬天":   {zh:"冬天很冷，要穿厚衣服。",           py:"Dōng tiān hěn lěng, yào chuān hòu yī fu.", fr:"En hiver il fait froid, il faut porter des vêtements chauds."},

  // ── Santé ────────────────────────────────────
  "生病":   {zh:"我昨天生病了，没去上学。",         py:"Wǒ zuó tiān shēng bìng le, méi qù shàng xué.", fr:"J'étais malade hier, je ne suis pas allé à l'école."},
  "头疼":   {zh:"我头疼，不想出门。",               py:"Wǒ tóu téng, bù xiǎng chū mén.",         fr:"J'ai mal à la tête, je ne veux pas sortir."},
  "发烧":   {zh:"孩子发烧了，要去看医生。",         py:"Hái zi fā shāo le, yào qù kàn yī shēng.", fr:"L'enfant a de la fièvre, il faut voir un médecin."},
  "药":     {zh:"医生给我开了一些药。",             py:"Yī shēng gěi wǒ kāi le yī xiē yào.",    fr:"Le médecin m'a prescrit des médicaments."},
  "休息":   {zh:"累了就要好好休息。",               py:"Lèi le jiù yào hǎo hǎo xiū xi.",         fr:"Quand on est fatigué, il faut bien se reposer."},
  "健康":   {zh:"运动对身体健康很好。",             py:"Yùn dòng duì shēn tǐ jiàn kāng hěn hǎo.", fr:"Le sport est très bon pour la santé."},
  "感冒":   {zh:"天气变了，我感冒了。",             py:"Tiān qì biàn le, wǒ gǎn mào le.",        fr:"Le temps a changé, j'ai attrapé un rhume."},

  // ── Conjonctions / Modaux ─────────────────────
  "因为":   {zh:"我喜欢中文，因为它很有趣。",       py:"Wǒ xǐ huān Zhōng wén, yīn wèi tā hěn yǒu qù.", fr:"J'aime le chinois parce qu'il est très intéressant."},
  "所以":   {zh:"下雨了，所以我没出门。",           py:"Xià yǔ le, suǒ yǐ wǒ méi chū mén.",     fr:"Il pleuvait, donc je ne suis pas sorti."},
  "虽然":   {zh:"虽然很贵，但她还是买了。",         py:"Suī rán hěn guì, dàn tā hái shì mǎi le.", fr:"Même si c'était cher, elle l'a quand même acheté."},
  "但是":   {zh:"我想去，但是没有时间。",           py:"Wǒ xiǎng qù, dàn shì méi yǒu shí jiān.", fr:"Je veux y aller, mais je n'ai pas le temps."},
  "如果":   {zh:"如果明天不下雨，我们就去公园。",   py:"Rú guǒ míng tiān bù xià yǔ, wǒ men jiù qù gōng yuán.", fr:"S'il ne pleut pas demain, nous irons au parc."},
  "而且":   {zh:"他聪明而且努力。",                 py:"Tā cōng míng ér qiě nǔ lì.",             fr:"Il est intelligent et de plus travailleur."},
  "可以":   {zh:"我可以用你的笔吗？",               py:"Wǒ kě yǐ yòng nǐ de bǐ ma?",            fr:"Puis-je utiliser ton stylo ?"},
  "应该":   {zh:"你应该每天锻炼身体。",             py:"Nǐ yīng gāi měi tiān duàn liàn shēn tǐ.", fr:"Tu devrais faire de l'exercice tous les jours."},
  "必须":   {zh:"上课前必须关手机。",               py:"Shàng kè qián bì xū guān shǒu jī.",      fr:"Il faut éteindre le téléphone avant le cours."},
  "能":     {zh:"你能帮我搬箱子吗？",               py:"Nǐ néng bāng wǒ bān xiāng zi ma?",      fr:"Peux-tu m'aider à porter la boîte ?"},
  "要":     {zh:"明天要早点起床。",                 py:"Míng tiān yào zǎo diǎn qǐ chuáng.",      fr:"Demain il faudra se lever tôt."},

  // ── Verbes d'action ───────────────────────────
  "了解":   {zh:"我想更了解中国文化。",             py:"Wǒ xiǎng gèng liǎo jiě Zhōng guó wén huà.", fr:"Je veux mieux connaître la culture chinoise."},
  "介绍":   {zh:"请介绍一下你自己。",               py:"Qǐng jiè shào yī xià nǐ zì jǐ.",        fr:"Veuillez vous présenter, s'il vous plaît."},
  "参加":   {zh:"我参加了学校的运动会。",           py:"Wǒ cān jiā le xué xiào de yùn dòng huì.", fr:"J'ai participé à la journée sportive de l'école."},
  "准备":   {zh:"我们正在准备明天的考试。",         py:"Wǒ men zhèng zài zhǔn bèi míng tiān de kǎo shì.", fr:"Nous préparons l'examen de demain."},
  "解决":   {zh:"他帮我解决了这个问题。",           py:"Tā bāng wǒ jiě jué le zhè gè wèn tí.",  fr:"Il m'a aidé à résoudre ce problème."},
  "发现":   {zh:"科学家发现了新的星球。",           py:"Kē xué jiā fā xiàn le xīn de xīng qiú.", fr:"Les scientifiques ont découvert une nouvelle planète."},
  "决定":   {zh:"我决定明年去中国留学。",           py:"Wǒ jué dìng míng nián qù Zhōng guó liú xué.", fr:"J'ai décidé d'aller étudier en Chine l'année prochaine."},
  "选择":   {zh:"这道题有四个选择。",               py:"Zhè dào tí yǒu sì gè xuǎn zé.",         fr:"Cette question a quatre choix."},

  // ── Adjectifs ────────────────────────────────
  "危险":   {zh:"过马路不看车很危险。",             py:"Guò mǎ lù bù kàn chē hěn wēi xiǎn.",    fr:"Traverser la rue sans regarder les voitures est dangereux."},
  "安全":   {zh:"骑自行车要注意安全。",             py:"Qí zì xíng chē yào zhù yì ān quán.",    fr:"Il faut faire attention à la sécurité quand on fait du vélo."},
  "简单":   {zh:"这道数学题很简单。",               py:"Zhè dào shù xué tí hěn jiǎn dān.",      fr:"Ce problème de maths est très simple."},
  "复杂":   {zh:"这个问题很复杂，需要时间。",       py:"Zhè gè wèn tí hěn fù zá, xū yào shí jiān.", fr:"Ce problème est très complexe, il faut du temps."},
  "方便":   {zh:"住在市中心很方便。",               py:"Zhù zài shì zhōng xīn hěn fāng biàn.",  fr:"Vivre au centre-ville est très pratique."},
  "有名":   {zh:"长城是世界有名的景点。",           py:"Cháng chéng shì shì jiè yǒu míng de jǐng diǎn.", fr:"La Grande Muraille est un site mondialement célèbre."},
  "认真":   {zh:"她学习很认真，每天都复习。",       py:"Tā xué xí hěn rèn zhēn, měi tiān dōu fù xí.", fr:"Elle étudie sérieusement, elle révise tous les jours."},

  // ── Famille / Relations ───────────────────────
  "丈夫":   {zh:"她的丈夫是一名医生。",             py:"Tā de zhàng fu shì yī míng yī shēng.",   fr:"Son mari est médecin."},
  "妻子":   {zh:"他的妻子喜欢做饭。",               py:"Tā de qī zi xǐ huān zuò fàn.",           fr:"Sa femme aime cuisiner."},
  "父母":   {zh:"我很爱我的父母。",                 py:"Wǒ hěn ài wǒ de fù mǔ.",                fr:"J'aime beaucoup mes parents."},
  "孩子":   {zh:"这个孩子很聪明。",                 py:"Zhè gè hái zi hěn cōng míng.",           fr:"Cet enfant est très intelligent."},
  "邻居":   {zh:"我们的邻居很友好。",               py:"Wǒ men de lín jū hěn yǒu hǎo.",         fr:"Nos voisins sont très sympathiques."},
  "同事":   {zh:"我和同事一起吃午饭。",             py:"Wǒ hé tóng shì yī qǐ chī wǔ fàn.",     fr:"Je déjeune avec mes collègues."},

  // ── Culture / Société ─────────────────────────
  "文化":   {zh:"中国文化有几千年的历史。",         py:"Zhōng guó wén huà yǒu jǐ qiān nián de lì shǐ.", fr:"La culture chinoise a plusieurs milliers d'années d'histoire."},
  "历史":   {zh:"我对历史很感兴趣。",               py:"Wǒ duì lì shǐ hěn gǎn xìng qù.",        fr:"Je suis très intéressé par l'histoire."},
  "经济":   {zh:"中国的经济发展很快。",             py:"Zhōng guó de jīng jì fā zhǎn hěn kuài.", fr:"L'économie chinoise se développe rapidement."},
  "社会":   {zh:"我们应该共同建设一个更好的社会。", py:"Wǒ men yīng gāi gòng tóng jiàn shè yī gè gèng hǎo de shè huì.", fr:"Nous devons construire ensemble une meilleure société."},
  "教育":   {zh:"教育对孩子的未来很重要。",         py:"Jiào yù duì hái zi de wèi lái hěn zhòng yào.", fr:"L'éducation est très importante pour l'avenir des enfants."},
  "科技":   {zh:"现代科技改变了我们的生活。",       py:"Xiàn dài kē jì gǎi biàn le wǒ men de shēng huó.", fr:"La technologie moderne a transformé notre vie."},

  // ════════ YCT 4 ════════════════════════════════

  // ── Communication / Débat ─────────────────────
  "辩论":   {zh:"他们就这个话题展开了激烈的辩论。", py:"Tā men jiù zhè gè huà tí zhǎn kāi le jī liè de biàn lùn.", fr:"Ils ont eu un vif débat sur ce sujet."},
  "演讲":   {zh:"总统在广场上发表了演讲。",         py:"Zǒng tǒng zài guǎng chǎng shàng fā biǎo le yǎn jiǎng.", fr:"Le président a prononcé un discours sur la place."},
  "表达":   {zh:"他善于表达自己的想法。",           py:"Tā shàn yú biǎo dá zì jǐ de xiǎng fǎ.", fr:"Il sait bien exprimer ses idées."},
  "交流":   {zh:"语言是人类交流的工具。",           py:"Yǔ yán shì rén lèi jiāo liú de gōng jù.", fr:"La langue est un outil de communication humaine."},
  "描述":   {zh:"请描述一下你看到的景象。",         py:"Qǐng miáo shù yī xià nǐ kàn dào de jǐng xiàng.", fr:"Décrivez le paysage que vous avez vu."},
  "说明":   {zh:"请说明你选择这个答案的理由。",     py:"Qǐng shuō míng nǐ xuǎn zé zhè gè dá àn de lǐ yóu.", fr:"Expliquez pourquoi vous avez choisi cette réponse."},
  "强调":   {zh:"老师强调了安全的重要性。",         py:"Lǎo shī qiáng diào le ān quán de zhòng yào xìng.", fr:"Le professeur a insisté sur l'importance de la sécurité."},
  "反驳":   {zh:"他提出了有力的论据来反驳对方。",   py:"Tā tí chū le yǒu lì de lùn jù lái fǎn bó duì fāng.", fr:"Il a avancé des arguments solides pour réfuter l'adversaire."},

  // ── Valeurs / Politique ───────────────────────
  "平等":   {zh:"所有人生来平等。",                 py:"Suǒ yǒu rén shēng lái píng děng.",       fr:"Tous les hommes naissent égaux."},
  "民主":   {zh:"民主是现代社会的核心价值。",       py:"Mín zhǔ shì xiàn dài shè huì de hé xīn jià zhí.", fr:"La démocratie est une valeur fondamentale de la société moderne."},
  "自由":   {zh:"言论自由是基本权利。",             py:"Yán lùn zì yóu shì jī běn quán lì.",     fr:"La liberté d'expression est un droit fondamental."},
  "责任":   {zh:"每个公民都有责任保护环境。",       py:"Měi gè gōng mín dōu yǒu zé rèn bǎo hù huán jìng.", fr:"Chaque citoyen a la responsabilité de protéger l'environnement."},
  "权利":   {zh:"每个人都有受教育的权利。",         py:"Měi gè rén dōu yǒu shòu jiào yù de quán lì.", fr:"Chaque personne a le droit à l'éducation."},
  "义务":   {zh:"纳税是公民的基本义务。",           py:"Nà shuì shì gōng mín de jī běn yì wù.", fr:"Payer des impôts est une obligation fondamentale du citoyen."},
  "公平":   {zh:"裁判应该保持公平。",               py:"Cái pàn yīng gāi bǎo chí gōng píng.",    fr:"L'arbitre doit rester impartial."},
  "规则":   {zh:"比赛必须遵守规则。",               py:"Bǐ sài bì xū zūn shǒu guī zé.",         fr:"La compétition doit respecter les règles."},
  "传统":   {zh:"春节是中国最重要的传统节日。",     py:"Chūn jié shì Zhōng guó zuì zhòng yào de chuán tǒng jié rì.", fr:"La fête du Printemps est la fête traditionnelle la plus importante en Chine."},
  "习俗":   {zh:"不同国家有不同的风俗习俗。",       py:"Bù tóng guó jiā yǒu bù tóng de fēng sú xí sú.", fr:"Les différents pays ont des coutumes différentes."},

  // ── Économie ─────────────────────────────────
  "投资":   {zh:"他把积蓄用于股票投资。",           py:"Tā bǎ jī xù yòng yú gǔ piào tóu zī.",   fr:"Il a investi ses économies en bourse."},
  "利润":   {zh:"这家公司今年获得了丰厚的利润。",   py:"Zhè jiā gōng sī jīn nián huò dé le fēng hòu de lì rùn.", fr:"Cette entreprise a réalisé des bénéfices importants cette année."},
  "市场":   {zh:"自由市场经济鼓励竞争。",           py:"Zì yóu shì chǎng jīng jì gǔ lì jìng zhēng.", fr:"L'économie de marché libre encourage la concurrence."},
  "消费":   {zh:"合理消费有助于国家经济发展。",     py:"Hé lǐ xiāo fèi yǒu zhù yú guó jiā jīng jì fā zhǎn.", fr:"Une consommation raisonnée contribue au développement économique national."},
  "税收":   {zh:"政府靠税收来提供公共服务。",       py:"Zhèng fǔ kào shuì shōu lái tí gōng gōng gòng fú wù.", fr:"Le gouvernement finance les services publics grâce aux impôts."},
  "预算":   {zh:"政府每年制定国家预算。",           py:"Zhèng fǔ měi nián zhì dìng guó jiā yù suàn.", fr:"Le gouvernement établit le budget national chaque année."},
  "通货膨胀":{zh:"通货膨胀使物价上涨。",           py:"Tōng huò péng zhàng shǐ wù jià shàng zhǎng.", fr:"L'inflation fait monter les prix."},
  "贸易":   {zh:"两国之间的贸易关系很密切。",       py:"Liǎng guó zhī jiān de mào yì guān xì hěn mì qiè.", fr:"Les relations commerciales entre les deux pays sont très étroites."},

  // ── Environnement ─────────────────────────────
  "环境":   {zh:"我们要保护地球的环境。",           py:"Wǒ men yào bǎo hù dì qiú de huán jìng.", fr:"Nous devons protéger l'environnement de la Terre."},
  "污染":   {zh:"工厂排放造成了严重的空气污染。",   py:"Gōng chǎng pái fàng zào chéng le yán zhòng de kōng qì wū rǎn.", fr:"Les émissions des usines provoquent une grave pollution de l'air."},
  "能源":   {zh:"太阳能是一种清洁能源。",           py:"Tài yáng néng shì yī zhǒng qīng jié néng yuán.", fr:"L'énergie solaire est une source d'énergie propre."},
  "生态":   {zh:"破坏生态系统会影响所有生物。",     py:"Pò huài shēng tài xì tǒng huì yǐng xiǎng suǒ yǒu shēng wù.", fr:"Détruire l'écosystème affecte tous les êtres vivants."},
  "气候变化":{zh:"气候变化是当今最严峻的挑战之一。", py:"Qì hòu biàn huà shì dāng jīn zuì yán jùn de tiǎo zhàn zhī yī.", fr:"Le changement climatique est l'un des défis les plus graves d'aujourd'hui."},
  "可再生": {zh:"风能是可再生能源的一种。",         py:"Fēng néng shì kě zài shēng néng yuán de yī zhǒng.", fr:"L'énergie éolienne est une forme d'énergie renouvelable."},

  // ── Technologie ───────────────────────────────
  "人工智能":{zh:"人工智能正在改变各行各业。",      py:"Rén gōng zhì néng zhèng zài gǎi biàn gè háng gè yè.", fr:"L'intelligence artificielle transforme tous les secteurs d'activité."},
  "机器人": {zh:"工厂里的机器人代替了人工操作。",   py:"Gōng chǎng lǐ de jī qì rén dài tì le rén gōng cāo zuò.", fr:"Les robots dans les usines remplacent les opérations manuelles."},
  "研究":   {zh:"科学家正在研究癌症的治疗方法。",   py:"Kē xué jiā zhèng zài yán jiū ái zhèng de zhì liáo fāng fǎ.", fr:"Les scientifiques étudient les traitements contre le cancer."},
  "实验":   {zh:"化学课上我们做了一个有趣的实验。", py:"Huà xué kè shàng wǒ men zuò le yī gè yǒu qù de shí yàn.", fr:"En cours de chimie, nous avons fait une expérience intéressante."},
  "发明":   {zh:"四大发明改变了世界历史。",         py:"Sì dà fā míng gǎi biàn le shì jiè lì shǐ.", fr:"Les quatre grandes inventions ont changé l'histoire du monde."},
  "创新":   {zh:"创新是企业发展的核心动力。",       py:"Chuàng xīn shì qǐ yè fā zhǎn de hé xīn dòng lì.", fr:"L'innovation est le moteur essentiel du développement des entreprises."},
  "技术":   {zh:"先进技术提高了生产效率。",         py:"Xiān jìn jì shù tí gāo le shēng chǎn xiào lǜ.", fr:"La technologie avancée améliore l'efficacité de la production."},
  "数字化": {zh:"数字化转型是现代企业的必然趋势。", py:"Shù zì huà zhuǎn xíng shì xiàn dài qǐ yè de bì rán qū shì.", fr:"La transformation numérique est une tendance inévitable pour les entreprises modernes."},

  // ── Art / Culture ─────────────────────────────
  "文学":   {zh:"她热爱文学，尤其喜欢诗歌。",       py:"Tā rè ài wén xué, yóu qí xǐ huān shī gē.", fr:"Elle est passionnée de littérature, surtout de poésie."},
  "小说":   {zh:"这部小说描写了一段感人的故事。",   py:"Zhè bù xiǎo shuō miáo xiě le yī duàn gǎn rén de gù shi.", fr:"Ce roman décrit une histoire touchante."},
  "诗歌":   {zh:"李白是唐代著名的诗歌大师。",       py:"Lǐ Bái shì Táng dài zhù míng de shī gē dà shī.", fr:"Li Bai est un grand maître de la poésie de la dynastie Tang."},
  "艺术":   {zh:"艺术能表达人类最深的情感。",       py:"Yì shù néng biǎo dá rén lèi zuì shēn de qíng gǎn.", fr:"L'art peut exprimer les émotions les plus profondes de l'humanité."},
  "绘画":   {zh:"她从小就喜欢绘画。",               py:"Tā cóng xiǎo jiù xǐ huān huì huà.",      fr:"Elle aime la peinture depuis son enfance."},
  "音乐会": {zh:"我们去听了一场精彩的音乐会。",     py:"Wǒ men qù tīng le yī chǎng jīng cǎi de yīn yuè huì.", fr:"Nous sommes allés à un concert magnifique."},

  // ── Psychologie / Philosophie ─────────────────
  "心理":   {zh:"心理健康和身体健康同样重要。",     py:"Xīn lǐ jiàn kāng hé shēn tǐ jiàn kāng tóng yàng zhòng yào.", fr:"La santé mentale est aussi importante que la santé physique."},
  "哲学":   {zh:"哲学帮助我们思考人生的意义。",     py:"Zhé xué bāng zhù wǒ men sī kǎo rén shēng de yì yì.", fr:"La philosophie nous aide à réfléchir au sens de la vie."},
  "逻辑":   {zh:"数学训练的是严密的逻辑思维。",     py:"Shù xué xùn liàn de shì yán mì de luó jí sī wéi.", fr:"Les mathématiques entraînent une pensée logique rigoureuse."},
  "道德":   {zh:"我们应该遵守基本的道德规范。",     py:"Wǒ men yīng gāi zūn shǒu jī běn de dào dé guī fàn.", fr:"Nous devons respecter les normes morales fondamentales."},

  // ── Qualités personnelles ─────────────────────
  "坚持":   {zh:"只要坚持，就能成功。",             py:"Zhǐ yào jiān chí, jiù néng chéng gōng.", fr:"Si on persévère, on peut réussir."},
  "勇气":   {zh:"面对困难需要勇气。",               py:"Miàn duì kùn nán xū yào yǒng qì.",       fr:"Il faut du courage pour faire face aux difficultés."},
  "耐心":   {zh:"学好一门语言需要耐心。",           py:"Xué hǎo yī mén yǔ yán xū yào nài xīn.", fr:"Il faut de la patience pour bien apprendre une langue."},
  "谦虚":   {zh:"谦虚使人进步，骄傲使人落后。",     py:"Qiān xū shǐ rén jìn bù, jiāo ào shǐ rén luò hòu.", fr:"L'humilité fait progresser, l'arrogance fait reculer."},
  "诚实":   {zh:"诚实是做人的基本品质。",           py:"Chéng shí shì zuò rén de jī běn pǐn zhì.", fr:"L'honnêteté est une qualité fondamentale dans la vie."},
  "积极":   {zh:"我们要以积极的态度面对挑战。",     py:"Wǒ men yào yǐ jī jí de tài du miàn duì tiǎo zhàn.", fr:"Nous devons faire face aux défis avec une attitude positive."},
  "乐观":   {zh:"她总是保持乐观的心态。",           py:"Tā zǒng shì bǎo chí lè guān de xīn tài.", fr:"Elle maintient toujours un état d'esprit optimiste."},
  "悲观":   {zh:"悲观的态度对解决问题没有帮助。",   py:"Bēi guān de tài du duì jiě jué wèn tí méi yǒu bāng zhù.", fr:"Une attitude pessimiste n'aide pas à résoudre les problèmes."},

  // ── Mondialisation ────────────────────────────
  "移民":   {zh:"许多人移民到其他国家寻求更好的生活。", py:"Xǔ duō rén yí mín dào qí tā guó jiā xún qiú gèng hǎo de shēng huó.", fr:"Beaucoup de gens émigrent vers d'autres pays pour une meilleure vie."},
  "全球化": {zh:"全球化促进了国际贸易和文化交流。", py:"Quán qiú huà cù jìn le guó jì mào yì hé wén huà jiāo liú.", fr:"La mondialisation favorise le commerce international et les échanges culturels."},
  "国际":   {zh:"这是一个需要国际合作解决的问题。", py:"Zhè shì yī gè xū yào guó jì hé zuò jiě jué de wèn tí.", fr:"C'est un problème qui nécessite une coopération internationale."},
  "冲突":   {zh:"两国之间的贸易冲突持续升级。",     py:"Liǎng guó zhī jiān de mào yì chōng tū chí xù shēng jí.", fr:"Le conflit commercial entre les deux pays continue de s'intensifier."},
  "和平":   {zh:"世界和平是全人类共同的愿望。",     py:"Shì jiè hé píng shì quán rén lèi gòng tóng de yuàn wàng.", fr:"La paix mondiale est le vœu commun de toute l'humanité."},
  "战争":   {zh:"战争给人民带来了巨大的痛苦。",     py:"Zhàn zhēng gěi rén mín dài lái le jù dà de tòng kǔ.", fr:"La guerre a causé d'immenses souffrances au peuple."},

  // ════════ YCT 5 ════════════════════════════════

  // ── Philosophie / Cognition ───────────────────
  "抽象":   {zh:"数学中的很多概念是抽象的。",       py:"Shù xué zhōng de hěn duō gài niàn shì chōu xiàng de.", fr:"Beaucoup de concepts en mathématiques sont abstraits."},
  "具体":   {zh:"请给我一个具体的例子。",           py:"Qǐng gěi wǒ yī gè jù tǐ de lì zi.",     fr:"Donnez-moi un exemple concret, s'il vous plaît."},
  "本质":   {zh:"我们要抓住问题的本质。",           py:"Wǒ men yào zhuā zhù wèn tí de běn zhì.", fr:"Nous devons saisir l'essence du problème."},
  "现象":   {zh:"极端天气是气候变化的典型现象。",   py:"Jí duān tiān qì shì qì hòu biàn huà de diǎn xíng xiàn xiàng.", fr:"Les conditions météorologiques extrêmes sont un phénomène typique du changement climatique."},
  "规律":   {zh:"科学家在自然界中发现了许多规律。", py:"Kē xué jiā zài zì rán jiè zhōng fā xiàn le xǔ duō guī lǜ.", fr:"Les scientifiques ont découvert de nombreuses lois dans la nature."},
  "假设":   {zh:"这只是一个假设，还需要验证。",     py:"Zhè zhǐ shì yī gè jiǎ shè, hái xū yào yàn zhèng.", fr:"Ce n'est qu'une hypothèse, elle doit encore être vérifiée."},
  "推理":   {zh:"通过逻辑推理可以得出结论。",       py:"Tōng guò luó jí tuī lǐ kě yǐ dé chū jié lùn.", fr:"On peut tirer des conclusions grâce au raisonnement logique."},
  "客观":   {zh:"我们要客观地评价这件事。",         py:"Wǒ men yào kè guān de píng jià zhè jiàn shì.", fr:"Nous devons évaluer cette affaire de manière objective."},
  "主观":   {zh:"艺术评价往往带有主观色彩。",       py:"Yì shù píng jià wǎng wǎng dài yǒu zhǔ guān sè cǎi.", fr:"Les évaluations artistiques ont souvent une coloration subjective."},
  "认知":   {zh:"儿童的认知能力随年龄增长。",       py:"Ér tóng de rèn zhī néng lì suí nián líng zēng zhǎng.", fr:"Les capacités cognitives des enfants se développent avec l'âge."},
  "意志":   {zh:"克服困难需要坚强的意志。",         py:"Kè fú kùn nán xū yào jiān qiáng de yì zhì.", fr:"Surmonter les difficultés nécessite une volonté forte."},
  "潜意识": {zh:"梦境往往反映了潜意识的想法。",     py:"Mèng jìng wǎng wǎng fǎn yìng le qián yì shí de xiǎng fǎ.", fr:"Les rêves reflètent souvent les pensées de l'inconscient."},

  // ── Psychologie ───────────────────────────────
  "情绪":   {zh:"音乐能够影响人的情绪。",           py:"Yīn yuè néng gòu yǐng xiǎng rén de qíng xù.", fr:"La musique peut influencer les émotions des gens."},
  "动机":   {zh:"了解行为背后的动机很重要。",       py:"Liǎo jiě xíng wéi bèi hòu de dòng jī hěn zhòng yào.", fr:"Il est important de comprendre les motivations derrière les comportements."},
  "焦虑":   {zh:"过多的压力会导致焦虑。",           py:"Guò duō de yā lì huì dǎo zhì jiāo lǜ.",  fr:"Trop de pression peut provoquer de l'anxiété."},
  "抑郁":   {zh:"抑郁症是一种需要认真对待的心理疾病。", py:"Yì yù zhèng shì yī zhǒng xū yào rèn zhēn duì dài de xīn lǐ jí bìng.", fr:"La dépression est une maladie mentale qui doit être prise au sérieux."},
  "共情":   {zh:"共情能力让我们更好地理解他人。",   py:"Gòng qíng néng lì ràng wǒ men gèng hǎo de lǐ jiě tā rén.", fr:"La capacité d'empathie nous permet de mieux comprendre les autres."},
  "自我":   {zh:"认识自我是个人成长的第一步。",     py:"Rèn shí zì wǒ shì gè rén chéng zhǎng de dì yī bù.", fr:"Se connaître soi-même est la première étape de la croissance personnelle."},

  // ── Politique / Droit ─────────────────────────
  "立法":   {zh:"国会负责立法，制定国家法律。",     py:"Guó huì fù zé lì fǎ, zhì dìng guó jiā fǎ lǜ.", fr:"Le parlement est responsable de la législation et de l'élaboration des lois nationales."},
  "宪法":   {zh:"宪法是国家的根本大法。",           py:"Xiàn fǎ shì guó jiā de gēn běn dà fǎ.", fr:"La constitution est la loi fondamentale d'un État."},
  "主权":   {zh:"每个国家都有捍卫主权的权利。",     py:"Měi gè guó jiā dōu yǒu hàn wèi zhǔ quán de quán lì.", fr:"Chaque pays a le droit de défendre sa souveraineté."},
  "选举":   {zh:"民主国家通过选举产生领导人。",     py:"Mín zhǔ guó jiā tōng guò xuǎn jǔ chǎn shēng lǐng dǎo rén.", fr:"Les pays démocratiques élisent leurs dirigeants par élection."},
  "改革":   {zh:"经济改革为国家带来了繁荣。",       py:"Jīng jì gǎi gé wèi guó jiā dài lái le fán róng.", fr:"Les réformes économiques ont apporté la prospérité au pays."},
  "腐败":   {zh:"反腐败斗争是政府的重要任务。",     py:"Fǎn fǔ bài dòu zhēng shì zhèng fǔ de zhòng yào rèn wu.", fr:"La lutte contre la corruption est une tâche importante du gouvernement."},
  "透明度": {zh:"政府决策需要更高的透明度。",       py:"Zhèng fǔ jué cè xū yào gèng gāo de tòu míng dù.", fr:"Les décisions gouvernementales nécessitent plus de transparence."},
  "问责":   {zh:"公众有权对政府官员进行问责。",     py:"Gōng zhòng yǒu quán duì zhèng fǔ guān yuán jìn xíng wèn zé.", fr:"Le public a le droit de demander des comptes aux fonctionnaires."},

  // ── Finance / Économie ────────────────────────
  "货币":   {zh:"货币政策影响整个国家经济。",       py:"Huò bì zhèng cè yǐng xiǎng zhěng gè guó jiā jīng jì.", fr:"La politique monétaire influence l'ensemble de l'économie nationale."},
  "汇率":   {zh:"汇率波动影响国际贸易。",           py:"Huì lǜ bō dòng yǐng xiǎng guó jì mào yì.", fr:"Les fluctuations des taux de change affectent le commerce international."},
  "赤字":   {zh:"政府的财政赤字令人担忧。",         py:"Zhèng fǔ de cái zhèng chì zì lìng rén dān yōu.", fr:"Le déficit budgétaire du gouvernement est préoccupant."},
  "垄断":   {zh:"垄断行为阻碍了市场竞争。",         py:"Lǒng duàn xíng wéi zǔ ài le shì chǎng jìng zhēng.", fr:"Le comportement monopolistique entrave la concurrence sur le marché."},
  "金融":   {zh:"全球金融市场紧密相连。",           py:"Quán qiú jīn róng shì chǎng jǐn mì xiāng lián.", fr:"Les marchés financiers mondiaux sont étroitement interconnectés."},
  "资本主义":{zh:"资本主义制度强调自由市场和私有财产。", py:"Zī běn zhǔ yì zhì dù qiáng diào zì yóu shì chǎng hé sī yǒu cái chǎn.", fr:"Le système capitaliste met l'accent sur le marché libre et la propriété privée."},

  // ── Sciences & Technologie avancée ───────────
  "基因工程":{zh:"基因工程技术在医学领域有广泛应用。", py:"Jī yīn gōng chéng jì shù zài yī xué lǐng yù yǒu guǎng fàn yìng yòng.", fr:"La technologie du génie génétique est largement utilisée dans le domaine médical."},
  "量子计算":{zh:"量子计算将颠覆传统计算机的极限。", py:"Liàng zǐ jì suàn jiāng diān fù chuán tǒng jì suàn jī de jí xiàn.", fr:"L'informatique quantique va révolutionner les limites des ordinateurs traditionnels."},
  "神经网络":{zh:"深度学习依赖于人工神经网络。",    py:"Shēn dù xué xí yī lài yú rén gōng shén jīng wǎng luò.", fr:"L'apprentissage profond repose sur des réseaux de neurones artificiels."},
  "区块链": {zh:"区块链技术保证了数据的安全和透明。", py:"Qū kuài liàn jì shù bǎo zhèng le shù jù de ān quán hé tòu míng.", fr:"La technologie blockchain garantit la sécurité et la transparence des données."},
  "虚拟现实":{zh:"虚拟现实技术让用户身临其境。",    py:"Xū nǐ xiàn shí jì shù ràng yòng hù shēn lín qí jìng.", fr:"La réalité virtuelle permet aux utilisateurs d'être immergés dans un environnement."},
  "深度学习":{zh:"深度学习是人工智能的核心技术之一。", py:"Shēn dù xué xí shì rén gōng zhì néng de hé xīn jì shù zhī yī.", fr:"L'apprentissage profond est l'une des technologies fondamentales de l'IA."},

  // ── Littérature / Rhétorique ──────────────────
  "叙事":   {zh:"好的叙事能让读者身临其境。",       py:"Hǎo de xù shì néng ràng dú zhě shēn lín qí jìng.", fr:"Une bonne narration permet aux lecteurs de s'immerger dans l'histoire."},
  "隐喻":   {zh:"诗歌中常用隐喻来表达情感。",       py:"Shī gē zhōng cháng yòng yǐn yù lái biǎo dá qíng gǎn.", fr:"La poésie utilise souvent des métaphores pour exprimer des émotions."},
  "象征":   {zh:"鸽子是和平的象征。",               py:"Gē zi shì hé píng de xiàng zhēng.",      fr:"La colombe est le symbole de la paix."},
  "讽刺":   {zh:"这部小说充满了对社会现实的讽刺。", py:"Zhè bù xiǎo shuō chōng mǎn le duì shè huì xiàn shí de fěng cì.", fr:"Ce roman est plein d'ironie sur la réalité sociale."},
  "修辞":   {zh:"修辞技巧使演讲更有说服力。",       py:"Xiū cí jì qiǎo shǐ yǎn jiǎng gèng yǒu shuō fú lì.", fr:"Les techniques rhétoriques rendent les discours plus persuasifs."},
  "风格":   {zh:"每位作家都有自己独特的写作风格。", py:"Měi wèi zuò jiā dōu yǒu zì jǐ dú tè de xiě zuò fēng gé.", fr:"Chaque écrivain a son propre style d'écriture unique."},

  // ── Environnement avancé ──────────────────────
  "生物多样性":{zh:"保护生物多样性是人类的共同责任。", py:"Bǎo hù shēng wù duō yàng xìng shì rén lèi de gòng tóng zé rèn.", fr:"La protection de la biodiversité est une responsabilité commune de l'humanité."},
  "物种":   {zh:"每年都有许多物种面临灭绝的威胁。", py:"Měi nián dōu yǒu xǔ duō wù zhǒng miàn lín miè jué de wēi xié.", fr:"Chaque année, de nombreuses espèces font face à la menace d'extinction."},
  "碳中和": {zh:"许多国家承诺在2050年实现碳中和。", py:"Xǔ duō guó jiā chéng nuò zài 2050 nián shí xiàn tàn zhōng hé.", fr:"De nombreux pays s'engagent à atteindre la neutralité carbone d'ici 2050."},
  "生态系统":{zh:"森林生态系统对地球至关重要。",    py:"Sēn lín shēng tài xì tǒng duì dì qiú zhì guān zhòng yào.", fr:"L'écosystème forestier est vital pour la Terre."},
  "沙漠化": {zh:"沙漠化威胁着全球农业用地。",       py:"Shā mò huà wēi xié zhe quán qiú nóng yè yòng dì.", fr:"La désertification menace les terres agricoles dans le monde entier."},
  "海平面": {zh:"全球变暖导致海平面上升。",         py:"Quán qiú biàn nuǎn dǎo zhì hǎi píng miàn shàng shēng.", fr:"Le réchauffement climatique provoque la montée du niveau de la mer."},

  // ── Société ───────────────────────────────────
  "城镇化": {zh:"快速城镇化带来了住房和交通问题。", py:"Kuài sù chéng zhèn huà dài lái le zhù fáng hé jiāo tōng wèn tí.", fr:"L'urbanisation rapide a engendré des problèmes de logement et de transport."},
  "贫困":   {zh:"消除贫困是联合国的主要目标之一。", py:"Xiāo chú pín kùn shì Lián hé guó de zhǔ yào mù biāo zhī yī.", fr:"L'élimination de la pauvreté est l'un des principaux objectifs des Nations Unies."},
  "不平等": {zh:"收入不平等在全球范围内加剧。",     py:"Shōu rù bù píng děng zài quán qiú fàn wéi nèi jiā jù.", fr:"Les inégalités de revenus s'aggravent à l'échelle mondiale."},
  "歧视":   {zh:"任何形式的歧视都是不可接受的。",   py:"Rèn hé xíng shì de qí shì dōu shì bù kě jiē shòu de.", fr:"Toute forme de discrimination est inacceptable."},
  "包容":   {zh:"我们应该用包容的态度对待不同的文化。", py:"Wǒ men yīng gāi yòng bāo róng de tài du duì dài bù tóng de wén huà.", fr:"Nous devons aborder les différentes cultures avec tolérance."},
  "多元化": {zh:"多元化的团队更具创造力。",         py:"Duō yuán huà de tuán duì gèng jù chuàng zào lì.", fr:"Les équipes diversifiées sont plus créatives."},

  // ── Business / Entrepreneuriat ────────────────
  "企业家": {zh:"成功的企业家善于发现市场机会。",   py:"Chéng gōng de qǐ yè jiā shàn yú fā xiàn shì chǎng jī huì.", fr:"Les entrepreneurs qui réussissent savent identifier les opportunités du marché."},
  "初创":   {zh:"许多初创公司依赖风险投资起步。",   py:"Xǔ duō chū chuàng gōng sī yī lài fēng xiǎn tóu zī qǐ bù.", fr:"De nombreuses startups démarrent grâce au capital-risque."},
  "品牌":   {zh:"一个强大的品牌能吸引更多顾客。",   py:"Yī gè qiáng dà de pǐn pái néng xī yǐn gèng duō gù kè.", fr:"Une marque forte attire plus de clients."},
  "营销":   {zh:"社交媒体营销已成为企业推广的重要手段。", py:"Shè jiāo méi tǐ yíng xiāo yǐ chéng wéi qǐ yè tuī guǎng de zhòng yào shǒu duàn.", fr:"Le marketing sur les réseaux sociaux est devenu un outil promotionnel important pour les entreprises."},
  "供应链": {zh:"疫情严重干扰了全球供应链。",       py:"Yì qíng yán zhòng gān rǎo le quán qiú gōng yìng liàn.", fr:"La pandémie a gravement perturbé les chaînes d'approvisionnement mondiales."},
  "商业模式":{zh:"平台经济创造了全新的商业模式。", py:"Píng tái jīng jì chuàng zào le quán xīn de shāng yè mó shì.", fr:"L'économie de plateforme a créé de tout nouveaux modèles économiques."},
};
