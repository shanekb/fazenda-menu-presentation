import raw from './menu-raw.json';
import media from './menu-media.json';
export type MenuItem=typeof raw[number]&{displayName:string;group:string;section:string;subtitle:string;description:string;story:string;priceNote:string;displayPrices:string[];priceContext:string;photoCaption:string;imageType:string};
const foodCopy:Record<string,[string,string,string]>={
 '977904':['Premium dinner experience','A complete dinner with the salad bar, hot dishes, and Brazilian sides. The published selection includes feijoada, rice, farofa with bacon, tomato basil soup, cheese bread, fried banana, and polenta, alongside the listed meats and premium cuts.','An evening of discovery, with room to revisit the flavors you love.'],
 '931975':['Ribeye / Ancho','Ribeye seasoned with sea salt.','A bold cut, a simple seasoning, and an invitation to savor each slice.'],
 '931976':['Filet mignon','Beef tenderloin, seasoned with sea salt.','A quieter expression of beef, with the seasoning kept deliberately simple.'],
 '931977':['Costela bovina','Sea-salt-seasoned beef ribs, slowly roasted for tenderness.','The pleasure here is in taking your time, just as the preparation does.'],
 '931974':['Costeletas de cordeiro','Lamb chops, seasoned and roasted for a tender finish.','A change of pace in the procession of cuts, made for the guest who enjoys exploring.'],
 '1373747':['Picanha','The prime top-sirloin selection, seasoned with sea salt.','Sea salt leaves room for the beef to speak. A beautifully simple way to begin your tasting.'],
 '1373748':['Alcatra','Top sirloin with sea-salt seasoning.','An understated cut that makes a little room on your plate feel well worth saving.'],
 '1373750':['Fraldinha','A bottom-sirloin selection seasoned with sea salt.','A new cut to compare, a new favorite to discover.'],
 '1373752':['Baby bife','Sliced prime top sirloin with sea-salt seasoning.','A smaller slice brings its own invitation: taste, pause, and come back for another.'],
 '1373753':['Frango · chicken breast','Chicken breast from the published dinner selection. Ask your server about the current preparation.','A lighter change of pace between the beef and pork selections.'],
 '1373754':['Carne com alho','Beef seasoned with garlic paste.','Garlic brings a different voice to the table, adding another chapter to the evening.'],
 '1373755':['Bife de cordeiro','A seasoned lamb steak, roasted for tenderness.','A distinct lamb selection to enjoy beside the other cuts.'],
 '1373756':['Frango · chicken legs','Seasoned chicken legs, slowly roasted.','A familiar comfort, given a place in a generous dinner selection.'],
 '1373757':['Frango com bacon','Chicken wrapped in bacon. Confirm the current preparation with your server.','Two familiar favorites meet in one small tasting.'],
 '1373758':['Coração de galinha','Seasoned, roasted chicken hearts.','For the curious diner, a chance to move beyond the familiar and try another part of the selection.'],
 '1373759':['Linguiça','Seasoned, roasted sausage.','A satisfying interlude between cuts, and another reason to keep exploring.'],
 '1373761':['Lombo','Roasted pork loin with a Parmesan crust.','A cheese-crusted finish gives this pork selection a character of its own.'],
 '1373762':['Costela de porco','Seasoned pork ribs, slowly roasted for tenderness.','Slow preparation, shared anticipation, and a plate made for lingering over.'],
 '1373763':['Bife com bacon','Steak wrapped in bacon. Confirm the current preparation with your server.','A rich pairing that makes a memorable stop in the dinner selection.'],
 '1373767':['Grilled pineapple','Grilled pineapple seasoned with cinnamon sugar.','A sweet turn in the evening, with cinnamon adding a fragrant finishing touch.'],
 '931960':['The salad bar','The all-you-can-eat salad bar, available as its own published menu option. Ask about the day’s selection.','A plate you compose yourself, with a little freedom in every visit to the bar.'],
 '604292':['Papaya cream ice cream','A papaya cream ice-cream dessert. Ask your server about its preparation.','A fruit-led finish for an evening of generous flavors.'],
 '604294':['Brazilian flan','Brazilian flan from the dessert selection.','A small, unhurried sweet course to bring the evening to a gentle close.'],
 '604295':['Key lime pie','Key lime pie from the dessert selection.','For the guest who likes a citrus note at the end of dinner.'],
 '604296':['Chocolate mousse cake','Chocolate mousse cake from the dessert selection.','A chocolate moment worth leaving a little room for.'],
 '604297':['Cheesecake','Cheesecake from the dessert selection.','A familiar favorite, best enjoyed at the pace of good conversation.'],
 '604298':['Crème brûlée','Crème brûlée from the dessert selection.','A classic final course with a little ceremony of its own.'],
 '604299':['Chocolate molten cake','Chocolate molten cake from the dessert selection.','For the table that believes the last course belongs to chocolate.'],
 '931958':['Tres leches','Tres leches cake from the dessert selection.','A sweet invitation to slow down before the evening ends.'],
 '989954':['Raspberry donut cheesecake','A raspberry donut cheesecake selection.','A playful final course for a celebratory table.'],
 '977906':['A birthday sweet','The published birthday offering includes a choice of Brazilian flan, crème brûlée, cheesecake, chocolate mousse cake, or papaya cream. Confirm eligibility and current terms with the restaurant.','A little sweetness for a day that deserves its own moment.'],
 '977879':['Brazilian flan · birthday selection','Brazilian flan is listed among the birthday dessert choices. Confirm the offer with staff.','An occasion deserves a sweet finishing touch.'],
 '977889':['Crème brûlée · birthday selection','Crème brûlée is listed among the birthday dessert choices. Confirm the offer with staff.','A small celebration, served at the end of a memorable meal.'],
 '977890':['Cheesecake · birthday selection','Cheesecake is listed among the birthday dessert choices. Confirm the offer with staff.','A familiar favorite for a personal celebration.'],
 '977892':['Chocolate mousse cake · birthday selection','Chocolate mousse cake is listed among the birthday dessert choices. Confirm the offer with staff.','A birthday moment for the chocolate lover at the table.'],
 '989890':['Papaya cream · birthday selection','Papaya cream is listed among the birthday dessert choices. Confirm the offer with staff.','A fruit-led way to mark the occasion.'],
 '989941':['Grilled tiger shrimp','Grilled tiger shrimp from the separately priced seafood selection.','A seafood interlude for the guest who wants a different taste of the evening.'],
 '989942':['Grilled salmon','Grilled salmon from the separately priced seafood selection.','A fish selection with its own place at the table.'],
 '989943':['Tiger shrimp cocktail','A tiger shrimp cocktail from the seafood selection. Confirm accompaniments with your server.','An opening taste, or a seafood moment to enjoy alongside dinner.']
};
const cocktailCopy:Record<string,[string,string,string]>={
 '676277':['Traditional Brazilian caipirinha','Cachaça with fresh lime and sugar. Listed flavor options include passion fruit, strawberry, pineapple, mango, raspberry, and blueberry.','Lime, sugar, and cachaça: a simple combination with a distinctly Brazilian identity.'],
 '676279':['Mojito','Bacardi rum, lime, mint, and sugar. Listed fruit options include passion fruit, strawberry, pineapple, raspberry, mango, and blueberry.','Mint and lime set the scene for a fresh start to the evening.'],
 '676285':['Moscow-Me-Away Mule','Sobieski vodka, fresh lime, and the ginger component listed on the current menu. Confirm the mixer with the bartender.','A lime-led invitation to settle into the evening.'],
 '676286':['Bring On the Bloody Mary','The house-listed Bloody Mary. Ask the bartender about ingredients and garnishes.','A savory choice for a guest who prefers a different kind of cocktail moment.'],
 '676288':['Tropical piña colada','Bacardi rum with the restaurant’s house-made piña colada mix.','A tropical pause, wherever the evening takes you.'],
 '676289':['Grill Hall Strong Island','A house-named cocktail retained from the published menu. Ask the bartender about its recipe.','A name from the restaurant’s earlier chapter, still present on the current menu.'],
 '676290':['Top Shelf Margarita','Patrón Silver, Grand Marnier, sour mix, and fresh lime.','A citrus-forward invitation to raise a glass.'],
 '676291':['Top Shelf Martini','Your choice of Grey Goose vodka or Hendrick’s gin. Confirm the preferred preparation with the bartender.','Personal preference is part of the ritual.'],
 '676293':['Vida Cosmopolitan','Grey Goose, Grand Marnier, cranberry, and fresh lime.','A little color, a citrus finish, and the beginning of good conversation.'],
 '676301':['Alma Old Fashion','Bourbon with Luxardo, cherry, orange, sugar, and bitters.','An unhurried glass for an unhurried evening.'],
 '676305':['Top of the Line Manhattan','Bourbon, Luxardo, cherry, orange, bitters, and Carpano Antica vermouth.','A spirit-led selection to enjoy at your own pace.'],
 '964598':['Sidecar','Cognac with orange and lemon juice, plus orange liqueur as listed on the current menu.','Citrus gives a bright counterpoint to a cognac base.'],
 '964601':['French 75','Gin, Champagne, and lemon juice.','A sparkling beginning for a table with something to celebrate.'],
 '964605':['Spiked strawberry basil soda','Vodka with fresh strawberries, basil, and freshly squeezed lime.','Fruit and herbs make a colorful companion to an evening at the table.'],
 '964609':['Clover Club','Gin, Chambord, egg white, and freshly squeezed lemon.','A layered cocktail moment with a citrus note.'],
 '964611':['Raspberry daiquiri','White rum, Chambord, lemon juice, and house-infused simple syrup.','A fruit-led cocktail with room for a little indulgence.']
};
export const groups:Record<string,string>={
 'The dinner experience':'A generous beginning. Explore the complete dinner or the salad bar.',
 'Churrasco selections':'The cuts listed with the dinner experience. No individual prices are published.',
 'Seafood':'A different taste of the evening, with individually published prices.',
 'Something sweet':'A little room for a final pleasure.',
 'Birthday moments':'The birthday selections listed on the current menu. Ask staff about terms.',
 'Signature cocktails':'Brazilian favorites and familiar classics, made for the moment.',
 'Soft drinks & alcohol-free':'A considered choice for every guest at the table.',
 'Coffee & tea':'A warm pause before the evening ends.',
 'Beer':'The bottle and can selection.',
 'Draft beer':'Freshly poured from the restaurant taps.',
};
const spirits=['Whiskey','Gin','Tequila','Rum','Cordails','Vodka','Bourbon','Scotch'];
export const menu:MenuItem[]=raw.map(i=>{
 const id=i.id.replace('menu_item_','');
 let group='',section='',description='',story='',displayName=i.name,subtitle='',priceNote='';
 if(i.kind==='food'){
  const copy=foodCopy[id];if(copy)[displayName,description,story]=copy;
  if(i.category==='Top Shelf Dinner'){group=id==='977904'?'Dining experience':'Churrasco cuts';section=id==='977904'?'The dinner experience':'Churrasco selections';subtitle=id==='977904'?'Salad bar, hot dishes, sides & the listed cuts':'Listed with the dinner experience';if(id!=='977904')priceNote='This cut has no separate price on the published menu. Ask staff about the dinner selection and current availability.'}
  else if(i.category==='Salad Bar Buffet'){group='Dining experience';section='The dinner experience';subtitle='All-you-can-eat salad bar'}
  else if(i.category==='Shrimps'){group='Seafood';section='Seafood';subtitle='Separately priced seafood selection'}
  else {group='Desserts';section=i.category==='Birthday Desserts'?'Birthday moments':'Something sweet';subtitle=i.category==='Birthday Desserts'?'Published birthday selection':'A sweet finish'}
 }else if(i.category==='Cocktails'){
  group=section='Signature cocktails';const copy=cocktailCopy[id];if(copy)[displayName,description,story]=copy;subtitle=description.split('.')[0];
  if(i.prices.length>1)priceNote='The source lists these two prices without assigning a label to each. Confirm the applicable selection and price with the bartender.';
 }else if(['Soft Drinks','Coffee','Tea'].includes(i.category)){
  group='Alcohol-free';section=i.category==='Soft Drinks'?'Soft drinks & alcohol-free':'Coffee & tea';subtitle=i.category==='Soft Drinks'?'Alcohol-free selection':i.category;
  const special:Record<string,[string,string]>={
   '679847':['Guaraná, from the published soft-drink selection.','A Brazilian favorite to enjoy without alcohol.'],
   '679848':['Brazilian limeade from the published soft-drink selection. Confirm the recipe with your server.','A citrus moment that gives every guest a place in the toast.'],
   '999052':['Red Bull, listed as an 8.4 oz serving.','A familiar option from the soft-drink selection.'],
   '999058':['San Pellegrino from the published soft-drink selection. Confirm bottle size with your server.','A simple pause between tastes.']};
  if(special[id])[description,story]=special[id];else{description=`${i.name}, from the published ${i.category.toLowerCase()} selection.`;story=i.category==='Coffee'?'A warm finish, with a little time left for conversation.':i.category==='Tea'?'A quiet moment to make the evening last a little longer.':'A familiar refreshment, ready to accompany your meal.'}
  if(id==='585515'){displayName='Mexican Coca-Cola';subtitle='Glass bottle';description='Mexican Coca-Cola served in a glass bottle.';story='A classic glass-bottle refreshment.';}
  if(id==='679847')displayName='Guaraná';if(id==='136')displayName=i.name;
 }else if(i.category==='Draft Beer'){
  group='Beer';section='Draft beer';subtitle='On tap · served in a mug';description=i.id==='menu_item_bent_paddle_draft'?'Bent Paddle on tap. Ask your server for the current selection and price.':`${i.name}, served on tap in a mug.`;story='Freshly poured at the Fazenda bar. Ask your server about the current selection and serving size.';
 }else if(i.category==='Cans/Bottles'){
  group=section='Beer';subtitle=i.originalDescription||'Bottle / can selection';description=`${i.name}, from the published bottle and can selection.${i.originalDescription?' Listed details: '+i.originalDescription+'.':''}`;story=['679830','679831'].includes(id)?'A Brazilian beer selection to explore alongside the food.':'A familiar beer option to accompany your meal.';
 }else if(spirits.includes(i.category)){
  group='Spirits';section=i.category==='Cordails'?'Spirits · cordials':`Spirits · ${i.category.toLowerCase()}`;subtitle=i.category==='Cordails'?'Cordial selection':i.category;
  description=`${i.name}, from the published spirits selection. Ask the bartender about the current pour and preferred service.`;story='Choose your own pace, your own preparation, and a moment to enjoy it.';
  if(i.name==='Cachaca'){displayName='Cachaça';subtitle='Brazilian spirit';description='Cachaça, listed on the current spirits menu. Ask the bartender about the available bottle and service.';story='The spirit behind the caipirinha, with its own place at the bar.'}
 }else{
  group='Wine & bubbles';section=`The cellar · ${i.category.replaceAll('|',' / ').toLowerCase()}`;subtitle=i.originalDescription||'Published wine selection';description=`${i.name.replaceAll('|',' / ')}${i.originalDescription?' · '+i.originalDescription:''}. Listed in the ${i.category.replaceAll('|',' / ')} section. Ask your server about the current bottle, vintage, and service.`;story='A bottle to discover or a glass to linger over. Let the table, and your own taste, set the occasion.';
 }
 let displayPrices=[...i.prices],priceContext='';
 if(i.kind==='food'&&i.category==='Top Shelf Dinner'&&!i.prices.length){displayPrices=['$55.00'];priceContext='Included with dinner';priceNote='Listed under the $55.00 Premium Dinner Menu. This is the full dinner price, not a separate charge for this cut. Confirm the current selection with staff.';}
 if(i.category==='Birthday Desserts'){displayPrices=['$0.00'];priceContext='With birthday offer';priceNote='Complimentary as part of the published birthday dessert offering. Ask staff about eligibility and current terms.';}
 const linkedPrices:Record<string,string>={'1427678':'964684','1427679':'1167130','1427680':'1167128','1427681':'1167157'};
 const matchNames:Record<string,string>={'1427678':'Los Cardos','1427679':'Matanzas Creek','1427680':'Wild Song','1427681':'Martin Codax|Albarino'};
 if(matchNames[id]){
  const target=raw.find(x=>x.id==='menu_item_'+linkedPrices[id]);
  if(target){displayPrices=[...target.prices];displayName=`${matchNames[id].replaceAll('|',' · ')}${id==='1427681'?'':' · Sauvignon Blanc'}`;priceNote='Price matched to the same named selection in another section of the restaurant’s published drink menu. Confirm the bottle and vintage with staff.';}
 }
 if(id==='977904'){subtitle='Churrasco, salad bar, hot dishes & sides';priceContext='Full dinner experience';}
 if(id==='931960'){priceContext='Salad-bar buffet';}
 const extra=(media as Record<string,{image?:string;photoCaption?:string;imageType?:string}>)[id];
 const image=extra?.image||(id==='1373763'?null:i.image);
 return {...i,image,displayName,group,section,subtitle,description,story,priceNote,displayPrices,priceContext,photoCaption:extra?.photoCaption||(image?'Photo from the restaurant’s published menu':''),imageType:extra?.imageType||(image?'restaurant':'pending')};
});
