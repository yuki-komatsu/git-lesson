function FormCheck_search(){
if(document.cathand_search.search.value==""){
alert('検索語句を入力してください');
document.cathand_search.search.focus();
return false;
}
}