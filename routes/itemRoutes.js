const router=require('express').Router();
const{getAllItems,getItem,createItem,deleteItem,updateItem}=require('../controller/itemController')

router.get('',getAllItems);
router.route('/:id').get(getItem).delete(deleteItem).put(updateItem);
router.post('',createItem);

module.exports = router;