import * as React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity, Modal, StatusBar, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {
  Container, Header, Button, Content, ActionSheet, Root, Left, Right, Body, Title, Footer, FooterTab, Accordion, Fab, DatePicker
  , Item, Input, ListItem, Badge
} from "native-base";

export default class Azkar extends React.Component {
  constructor() {
    super();
    this.state = {
      azkar: [
        { show:1,a: 'أذكار الصباح', b: '★(أَصبَحْنا على فِطرةِ الإسلامِ، وعلى كَلِمةِ الإخلاصِ، وعلى دِينِ نَبيِّنا محمَّدٍ صلَّى اللهُ عليه وسلَّمَ، وعلى مِلَّةِ أبِينا إبراهيمَ، حَنيفًا مُسلِمًا، وما كان مِنَ المُشرِكينَ).\n★(بسمِ اللهِ الذي لا يَضرُ مع اسمِه شيءٌ في الأرضِ ولا في السماءِ وهو السميعُ العليمِ),(ثلاثُ مراتٍ).\n★(سبحانَ اللَّهِ وبحمدِهِ مئةَ مرَّةٍ).\n★(اللَّهُمَّ أنْتَ رَبِّي لا إلَهَ إلَّا أنْتَ، خَلَقْتَنِي وأنا عَبْدُكَ، وأنا علَى عَهْدِكَ ووَعْدِكَ ما اسْتَطَعْتُ، أعُوذُ بكَ مِن شَرِّ ما صَنَعْتُ، أبُوءُ لكَ بنِعْمَتِكَ عَلَيَّ، وأَبُوءُ لكَ بذَنْبِي فاغْفِرْ لِي، فإنَّه لا يَغْفِرُ الذُّنُوبَ إلَّا أنْتَ)\n★(اللَّهمَّ بِكَ أصبَحنا، وبِكَ أمسَينا، وبِكَ نحيا وبِكَ نموتُ وإليكَ المصيرُ، وإذا أمسَى فليقُلْ: اللَّهمَّ بِكَ أمسَينا وبِكَ أصبَحنا وبِكَ نحيا وبِكَ نموتُ وإليكَ النُّشورُ)\n★(اللهمَّ إني أسألُك العفوَ والعافيةَ، في الدنيا والآخرةِ، اللهمَّ إني أسألُك العفوَ والعافيةَ، في دِيني ودنيايَ وأهلي ومالي، اللهمَّ استُرْ عوراتي، وآمِنْ روعاتي، واحفظني من بين يدي، ومن خلفي، وعن يميني، وعن شمالي، ومن فوقي، وأعوذُ بك أن أُغْتَالَ من تحتي)\n★(اللهمَّ إنِّي أعوذُ بك من الهمِّ والحزنِ، والعجزِ والكسلِ، والبُخلِ والجُبنِ، وضَلَعِ الدَّينِ، وغَلَبَةِ الرجالِ)\n★(يا حيُّ يا قيُّومُ، برَحمتِكَ أستَغيثُ، أصلِح لي شأني كُلَّهُ، ولا تَكِلني إلى نَفسي طرفةَ عينٍ)\n★(اللَّهمَّ عالِمَ الغَيبِ والشَّهادةِ، فاطرَ السَّمواتِ والأرضِ، رَبَّ كلِّ شيءٍ ومَليكَهُ، أشهدُ أن لا إلَهَ إلَّا أنتَ، أعوذُ بِكَ مِن شرِّ نفسي وشرِّ الشَّيطانِ وشِركِهِ، قلهُ إذا أصبَحتَ، وإذا أمسَيتَ، وإذا أخَذتَ مَضجعَكَ)\n★(اللَّهمَّ ما أصبحَ بي من نعمةٍ أو بأحدٍ من خلقِكَ فمنكَ وحدَكَ لا شريكَ لكَ فلكَ الحمدُ ولكَ الشُّكرُ فقد أدَّى شكرَ يومِهِ ومن قالَ مثلَ ذلكَ حينَ يمسي فقد أدَّى شكرَ ليلتِهِ)\n★ (سُبْحَانَ اللهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ)\n★ وهي تُقال ثلاث مرات. (اللَّهُمَّ إنِّي أصبَحتُ أُشهِدُك، وأُشهِدُ حَمَلةَ عَرشِكَ، ومَلائِكَتَك، وجميعَ خَلقِكَ: أنَّكَ أنتَ اللهُ لا إلهَ إلَّا أنتَ، وأنَّ مُحمَّدًا عبدُكَ ورسولُكَ).\n★ آية الكرسي: (اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ).\n★ أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُ بِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر. (اللَّهمَّ عافِني في بدَني اللَّهمَّ عافِني في سمعي اللَّهمَّ عافِني في بصري لا إلهَ إلَّا أنت، اللَّهمَّ إنِّي أعوذُ بِكَ منَ الكُفْرِ والفقرِ اللَّهمَّ إنِّي أعوذُ بكَ من عذابِ القبرِ لا إلهَ إلَّا أنت).\n★(ثَلاثَ مرَّاتٍ) اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد، فقد جاء في الحديث: (مَن صلى عَلَيَّ حين يُصْبِحُ عَشْرًا ، وحين يُمْسِي عَشْرًا أَدْرَكَتْه شفاعتي يومَ القيامةِ).\n★ (أستغفرُ اللهَ العظيمَ الذي لا إلهَ إلَّا هو الحيَّ القيومَ وأتوبُ إليه).\n★ (لا إلهَ إلَّا اللهُ وحدَه لا شريكَ له له الملكُ وله الحمدُ وهو على كلِّ شيءٍ قديرٌ).\n★ قراءة سورة الإخلاص والمعوّذتين ثلاث مرات، قال رسول الله صلى الله عليه وسلم: (قُلْ هُوَ اللهُ أَحَدٌ، والْمُعَوِّذتَيْنِ حَينَ تُمسي وحين تُصبِحُ، ثلاثَ مراتٍ، يكفيكَ مِنْ كلِّ شئٍ):\n★ سورة الإخلاص: (قُلْ هُوَ اللَّهُ أَحَدٌ* اللَّهُ الصَّمَدُ* لَمْ يَلِدْ وَلَمْ يُولَدْ* وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ).\n★ سورة الفلق: (قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ* مِن شَرِّ مَا خَلَقَ* وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ* وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ* وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ).\n★ سورة الناس: (قُلْ أَعُوذُ بِرَبِّ النَّاسِ* مَلِكِ النَّاسِ* إِلَٰهِ النَّاسِ* مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ* الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ* مِنَ الْجِنَّةِ وَالنَّاسِ).\n★(اللَّهمَّ إنِّي أسألُكَ عِلمًا نافعًا ورزقًا طيِّبًا وعملًا متقبَّلًا)\n' }
        , {show:1, a: 'أذكار المساء', b: 'آية الكرسي، قال تعالى: (اللَّـهُ لَا إِلَـٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ).[١٧] سورة الإخلاص - ثلاث مرات، (قُلْ هُوَ اللَّـهُ أَحَدٌ، اللَّـهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ).[١٨] سورة الفلق - ثلاث مرات، (قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ).[١٩] سورة الناس - ثلاث مرات، (قُلْ أَعُوذُ بِرَبِّ النَّاسِ، مَلِكِ النَّاسِ، إِلَـهِ النَّاسِ، مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ، الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ، مِنَ الْجِنَّةِ وَالنَّاسِ).[٢٠] (اللهم بكَ أمسينا، وبكَ أصبحنا، وبكَ نحيا، وبكَ نموت، وإليك المصير). [٢١] (اللهم ما أمسى بي من نعمة أو بأحد من خلقك فمنك وحدك لا شريك لك، فلك الحمد ولك الشكر)،[٢٢] من قاله فقد أدى شكر ليلته. (أمسينا وأمسى الملك لله والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شئ قدير، رب أسألك خير ما في هذا اليوم وخير ما بعده، وأعوذ بك من شر ما في هذا اليوم وشر ما بعده، رب أعوذ بك من الكسل، وسوء الكبر، رب أعوذ بك من عذاب في النار وعذاب في القبر).[٢٣] (أمسينا على فطرة الإسلام وعلى كلمة الإخلاص، وعلى دين نبينا محمد صلى الله عليه وسلم، وعلى ملة أبينا إبراهيم، حنيفاً مسلماً وما كان من المشركين).[٢٤] (سبحان الله وبحمده: عدد خلقه، ورضا نفسه، وزنة عرشه، ومداد كلماته)[٢٥] - (عشر مرات). (اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لا نَعْلَمُهُ).[٢٦] - (ثلاث مرات). (اللهم صلّ وسلّم على سيدنا محمد)[٢٧] - (ثلاث مرات). (اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت، اللهم إني أعوذ بك من الكفر والفقر، اللهم إني أعوذ بك من عذاب القبر، لا إله إلا أنت)[٢٨] - (ثلاث مرات). (أعوذ بكلمات الله التامات من شر ما خلق)[٢٩] - (ثلاث مرات) من قالها لم يضره شيء. (سبحان الله و بحمده)[٣٠] - (مائة مرة). (اللهم إني أسألك العفو والعافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية، في ديني ودنياي وأهلي، ومالي، اللهم استر عوراتي، وآمن روعاتي، اللهم احفظني من بين يدي، ومن خلفي، وعن يميني، وعن شمالي، ومن فوقي، وأعوذ بعظمتك أن أُغتال من تحتي).[٣١] (لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شئ قدير)[٣٢] - (عشر مرات). (بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السَماء وهو السميع العليم)[٣٣] - (ثلاث مرات) من قالها لم يَضره من الله شيء. (اللهم عالم الغيب والشهادة فاطر السموات والأرض، رب كل شئ ومليكه، أشهد أن لا إله إلا أنت، أعوذ بك من شر نفسي، ومن شر الشيطان وشركه).[٣٤] (يا حي يا قيوم برحمتك أستغيث أصلح لي شأني كله ولا تكلني إلى نفسي طرفة عين).[٣٥] (اللهم أنت ربي لا إله إلا أنت، خلقتني و أنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي، وأعترف بذنوبي فاغفر لي ذنوبي إنه لا يغفر الذنوب إلا أنت).[٣٦] (من قالها موقناً بها حين يمسى ومات من ليلته دخل الجنّة)' }
        , { show:1,a: 'أذكار بعد الصلاه', b: 'أَسْـتَغْفِرُ الله، أَسْـتَغْفِرُ الله، أَسْـتَغْفِرُ الله. اللّهُـمَّ أَنْـتَ السَّلامُ ، وَمِـنْكَ السَّلام ، تَبارَكْتَ يا ذا الجَـلالِ وَالإِكْـرام ' },
        {show:1, a: 'أذكار السفر', b: 'الله أكبر، الله أكبر، الله أكبر، (سُبْحانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ * وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ) اللهم إنا نسألُكَ في سفرنا هذا البرَّ والتقوى، ومن العمل ما ترضى، اللهم هون علينا سفرنا هذا واطو عنا بعده، اللهم أنت الصاحب في السفر، والخليفة في الأهل، اللهم إني أعوذ بك من وعْثاءِ السفر، وكآبة المنظر، وسوء المنقلب في المال والأهل، وإذا رجع قالهن وزاد فيهن آيبون، تائبون، عابدون، لربنا حامدون. دعاء المقيم للمسافر أستودع الله دينك وأمانتك، وخواتيم عملك. زوَّدك الله التقوى، وغفر ذْنبك ويسَّر لك الخير حيث ما كنت. دعاء المسافر للمقيم: "أستودعُكَ الله الذي لا تضيع ودائعه". التكبير والتسبيح في سير السفر: قال جابر رضي الله عنه: "كنا إذا صعدنا كبرنا، وإذا نزلنا سبّحنا". أذكار المسافر إذا أسحر: "سَمعَ سَامعً بحمد الله وحُسنِ بلائه علينا، ربنا صاحبنا، وأفضِل علينا عائذاً بالله من النار". الدعاء إذا نزل منزلاً في سفر أو غيره "أعوذ بكلمات الله التامات من شر ما خلق". ذكر الرجوع من السفر: "يكبّر على كلّ شرف ثلاث تكبيرات ثمّ يقول: لا إله إلا الله وحده لا شريك لهُ، لهُ الملك، ولهُ الحمدُ وهو على كلّ شيءٍ قدير، آيبون، تائبون، عابدون، لربنا حامدون، صدق الله وعده، ونصر عبده، وهزم الأحزاب وحده". دعاء الركوب: "بسم الله الحمد لله.. (سُبْحانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ) الحمد لله، الحمد لله، الحمد لله، الله أكبر، الله أكبر، الله أكبر، سبحانك اللهم إني ظلمت نفسي فاغفر لي، إنّه لا يغفر الذنوب إلا أنت". الدعاء إذا تعسّر المركوبّ "بسم الله."' },
        { show:1,a: 'أذكار الخلاء', b: 'الذكر عند الخلاء: (بِسْمِ الله) اللّهُـمَّ إِنِّـي أَعـوذُ بِـكَ مِـنَ الْخُـبْثِ وَالْخَبائِث. الذكر بعد الخروج من الخلاء: غُفْـرانَك. ' },
        {show:1, a: 'أذكار النوم', b: '(اللَّهُمَّ باسْمِكَ أمُوتُ وأَحْيا).                        [١] (اللَّهمَّ أنتَ خلَقْتَ نفسي وأنتَ تتوفَّاها لك مماتُها ومحياها اللَّهمَّ إنْ توفَّيْتَها فاغفِرْ لها وإنْ أحيَيْتَها فاحفَظْها اللَّهمَّ إنِّي أسأَلُك العافيةَ).[٢] (اللَّهمَّ ربَّ السَّمواتِ وربَّ الأرضِ وربَّ العرشِ العظيمِ ربَّنا وربَّ كلِّ شيءٍ فالقَ الحَبِّ والنَّوى مُنزِلَ التَّوراةِ والإنجيلِ والفُرقانِ أعوذُ بك مِن شرِّ كلِّ شيءٍ أنتَ آخِذٌ بناصيتِه أنتَ الأوَّلُ فليس قبْلَك شيءٌ وأنتَ الآخِرُ فليس بعدَك شيءٌ وأنتَ الظَّاهرُ فليس فوقَك شيءٌ اقْضِ عنَّا الدَّينَ وأغنِنا مِن الفقرِ).[٣] (باسْمِكَ ربِّ وَضَعْتُ جنْبِي وبِكَ أَرفَعُهُ، إن أمسَكْت نفْسِي فارحَمْها، وإنْ أرسَلْتَها فاحْفَظْها بما تَحفَظُ به عبادَك الصَّالِحِينَ).[٤] (الحَمْدُ لِلَّهِ الذي أَطْعَمَنَا وَسَقَانَا، وَكَفَانَا وَآوَانَا، فَكَمْ مِمَّنْ لا كَافِيَ له وَلَا مُؤْوِيَ).[٥] (اللَّهمَّ قِني عذابَك يومَ تبعَثُ عبادَك).[٦] سبحان الله (ثلاثاً وثلاثين)، الحمدلله (ثلاثاً وثلاثين)، الله أكبر (أربعاً وثلاثين). (اللَّهمَّ إنِّي أسلَمْتُ نفسي إليك ووجَّهْتُ وجهي إليك وألجَأْتُ ظهري إليك وفوَّضْتُ أمري إليك رغبةً ورهبةً إليك لا ملجأَ ولا منجا منك إلَّا إليك آمَنْتُ بكتابِك الَّذي أنزَلْتَ ونبيِّك الَّذي أرسَلْتَ).[٧] (لا إلَهَ إلَّا اللَّهُ وحْدَهُ لا شَرِيكَ له، له المُلْكُ وله الحَمْدُ، وهو علَى كُلِّ شيءٍ قَدِيرٌ، الحَمْدُ لِلَّهِ، وسُبْحَانَ اللَّهِ، ولَا إلَهَ إلَّا اللَّهُ، واللَّهُ أَكْبَرُ، ولَا حَوْلَ ولَا قُوَّةَ إلَّا باللَّهِ)،[٨] من قالها ثم قال اللهم اغفر لي ودعا استُجيب له، وإن توضأ وصلّى قُبِلت صلاته. (قُلْ هُوَ اللَّـهُ أَحَدٌ*اللَّـهُ الصَّمَدُ*لَمْ يَلِدْ وَلَمْ يُولَدْ*وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ)،[٩] ثلاث مرات. (قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ*مِن شَرِّ مَا خَلَقَ*وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ*وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ*وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ)،[١٠] ثلاث مرات. (قُلْ أَعُوذُ بِرَبِّ النَّاسِ*مَلِكِ النَّاسِ*إِلَـهِ النَّاسِ*مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ*الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ*مِنَ الْجِنَّةِ وَالنَّاسِ)،[١١] ثلاث مرات. (قُلْ يَا أَيُّهَا الْكَافِرُونَ*لَا أَعْبُدُ مَا تَعْبُدُونَ*وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ*وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ*وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ*لَكُمْ دِينُكُمْ وَلِيَ دِينِ).[١٢] (اللَّـهُ لَا إِلَـٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ).[١٣] (آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ كُلٌّ آمَنَ بِاللَّـهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ وَقَالُوا سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ*لَا يُكَلِّفُ اللَّـهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ).[١٤] قراءة سورتي تبارك والسجدة' }
        , {show:1, a: 'أذكار الإستيقاظ', b: 'روي في صحيحي امامي المحدثين ابي عبدالله محمد بن اسماعيل بن ابراهيم بن المغيرة البخاري وأبي الحسين المسلم بن الحجاج بن مسلم القشيري رضي الله تعالى عنه أن رسول الله صلى الله عليه وسلم قال :( ‏‏يعقد  ‏الشيطان على قافية رأس أحدكم إذا هو نام ثلاث عقد يضرب كل عقدة مكانها عليك ليل طويل فارقد فإن استيقظ وذكر الله تعالى انحلت عقدة فإن توضأ انحلت عقدة فإن صلى انحلت عقدة فأصبح نشيطا طيب النفس وإلا أصبح خبيث النفس كسلان)وقافية الرأس تعني آخره وقد روي في صحيح البخاري عن حذيفة بن اليمان رضي الله عنهما وعن أبي ذر رضي الله عنه قالا: كان رسول الله صلى الله عليه وسلم إذا أوى إلى فراشه قال :(باسمك اللهم أحيا وأموت ) ، وإذا استيقظ قال : (الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور) وروينا في كتاب ابن السني بإسناد صحيح عن أبي هريرة رضي الله عنه عن النبي صلى الله عليه وسلم قال : ( إذا استيقظ أحدكم فليقل : الحمد لله الذي رد علي روحي وعافاني في جسدي وأذن لي بذكره ) وروينا فيه عن عائشة رضي الله عنهما عن النبي صلى الله عليه وسلم قال : (ما من عبد يقول عند رد الله تعالى روحه : لا إله إلا الله وحده لا شريك له ، له الملك وله الحمد وهو على كل شيء قدير ، إلا غفر الله له ذنوبه ولو كانت مثل زبد البحر) وروينا عن أبي هريرة رضي الله عنه قال : قال رسول الله صلى الله عليه وسلم (ما من رجل ينتبه من نومه فيقول : الحمد لله الذي خلق النوم واليقظة ، الحمد لله الذي بعثني سالماً سوياً ، أشهد أن الله يحيي الموتى وهو على كل شيء قدير ، إلا قال الله تعالى : صدق عبدي ) وروينا في سنن أبي داود عن عائشة رضي الله تعالى عنها قالت : (كان رسول الله صلى الله عليه وسلم إذا استيقظ من الليل قال : (لا إله إلا أنت سبحانك ، اللهم إني استغفرك لذنبي وأسألك رحمتك ، اللهم زدني علماً ولا تزغ قلبي بعد إذ هديتني وهب لي من لدنك رحمة إنك أنت الوهاب' }
        , { show:1,a: 'أذكار الطعام و الضيف', b: '★الذكر عند الطعام والشراب: بسم الله - فإن نسى فى أوله فليقل، بسم الله فى أوله وآخره، اللهم بارك لنا فيه وأطعمنا خيرا منه الذكر عند \n★الفراغ من الطعام والشراب: ‏الحمد لله كثيرا طيبا مباركا فيه غير مكفي ولا مودع ولا مستغنى عنه ربنا الحمد لله الذي أطعمني هذا ورزقنيه من غير حول مني ولا قوة، غفر له ما تقدم من ذنبه\n★أذكار الضيف: ‏أفطر عندكم الصائمون، وأكل طعامكم الأبرار، وصلت عليكم الملائكة' }
        , { show:1,a: 'أذكار المسجد', b: '★ دعاء الذّهاب إلى المسجد :اللّهمّ اجعل في قلبي نورا، وفي لساني نورا، واجعل في سمعي نورا، واجعل في بصري نورا، واجعل من خلفي نورا، ومن أمامي نورا، واجعل من فوقي نورا، ومن تحتي نورا اللّهمّ أعطني نورا.\n★ دعاء دخول المسجد : يبدأ برجله اليمنى، ويقول: أعوذ بالله العظيم وبوجهه الكريم وسلطانه القديم من الشّيطان الرّجيم، بسم اللّه، والصّلاة والسّلام على رسول الله، اللّهمّ افتح لي أبواب رحمتك. \n★ دعاء الخروج من المسجد : يبدأ برجله اليسرى، ويقول: بسم اللّه والصّلاة والسّلام على رسول اللّه، اللّهمّ إنّي أسألك من فضلك، اللّهمّ اعصمني من الشّيطان الرّجيم.' }
     
      ],
      modalvisible:false,
      Modall: '',
       }
  }


  searchfun(value) {
    let newarr = this.state.azkar;

    for (let i = 0; i < newarr.length; i++) {

      if ((newarr[i].a).includes(value)) {
        newarr[i].show = 1
      } else { newarr[i].show = 0 }
    }

    this.setState({ azkar: newarr })
  }
  render() {
    return (
      <>
        <View style={{ backgroundColor: '#ECECEC', flex: 1 }}>
            {/* header */}
            <StatusBar
            backgroundColor={'#008F7A'}
          />
            <View style={{height:'7%',backgroundColor:'#008F7A',justifyContent:'center'}}>
           <Text style={{color:'#fff',fontSize:20,paddingRight:'5%'}}>أذكار</Text>
         </View>
          <ScrollView >
          <TextInput style={{
              backgroundColor:"#ECECEC",
              height: 45,
              width: '95%',
             alignSelf:'center',
              borderRadius: 10,
            borderBottomWidth:1,
            borderBottomColor:'#008F7A',
            }}
              placeholder={"بحث"}
              placeholderTextColor='#000000ad'
              onChangeText={(value) => {
                this.searchfun(value)
              }
              }

            />
            <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent: 'space-around',marginTop:10}}>
            {this.state.azkar.map((azkar) => (
                (azkar.show==1)?(
              <TouchableOpacity onPress={() => {
                this.setState({ Modall: azkar, modalvisible: true }
                )
              }}
              style={{
    justifyContent:'center', 
      width: '85%',
   height: 70,
   backgroundColor:'#fff',
   marginBottom:10,
   borderRadius:10,
   elevation:3}} >
                   <Text style={{ color: '#008F7A',  fontSize: 18,textAlign:'center' }}>{azkar.a}</Text>
              </TouchableOpacity>):(null)
            ))}
    
            </View>
          </ScrollView>
                   {/* footer */}
      <Footer style={{backgroundColor:'#F0E9E8'}}>
          <FooterTab style={{backgroundColor:'#008F7A',borderTopLeftRadius:15,borderTopRightRadius:15}} >
            <Button>
            <Icon name={'home'} size={20} color={"#fff"}/>
            
             
            </Button>
         
            <Button> 
            <Icon name={'user'} size={20} color={"#ddd"}/>
            </Button>
          </FooterTab>
          </Footer>
        </View>
        <Modal
          transparent={true}
           animationType={'fade'}
          visible={this.state.modalvisible}
          onRequestClose={
            () => {
              this.setState({ modalvisible: false }) }
          }>
            <ImageBackground style={{backgroundColor:'#ECECEC',flex:1}} source={require("../img/pic5.jpeg")}
            resizeMode={'cover'}>
               {/* header */}
         
               <View style={{height:'7%',backgroundColor:'#008F7A',justifyContent:'center'}}>
           <Text style={{color:'#fff',fontSize:20,paddingRight:'5%'}}>{this.state.Modall.a}</Text>
         </View>
          <ScrollView >
            <Text style={{ fontSize: 20, margin: 20 }}>{this.state.Modall.b}</Text>
          </ScrollView>
          </ImageBackground>
        </Modal>

      </>
    )
  }
}
