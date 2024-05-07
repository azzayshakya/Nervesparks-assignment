const router= require('express').Router();
const authController=require('../Controllers/Deal')

router.post("/add_deal_to_dealershi",authController.add_deal_to_dealership)
router.post("/add_dealership",authController.add_dealership)
router.post("/cars",authController.cars)
router.post("/cars_dealership",authController.cars_dealership)
router.post("/deal_complete",authController.deal_complete)
router.post("/deal_of_cars",authController.deal_of_cars)
router.post("/dealership_of_car",authController.dealership_of_car)
router.post("/dealership_sold",authController.dealership_sold)
router.post("/deals_of_dealership",authController.deals_of_dealership)
router.post("/vehicle_of_user",authController.vehicle_of_user)

router.post("/createUser",authController.createUser)


module.exports=router
