const convToRupees = (dollar) => {
  if( typeof dollar === 'number'){
    return dollar * 64
  }else {
    throw Error('Not valid Input')
  }
}

try {
  console.log(convToRupees('five'));
} catch (e) {
  console.log(e);
}
console.log('GOOD');
