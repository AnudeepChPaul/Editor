// let SubModel = require("../../models/category/sub");
//
// module.exports = {
//     get: (req, res) => {
//         debugger;
//         SubModel.find((err, result) => {
//             if (err) return res.send({
//                 error: true
//             });
//             res.send({
//                 success: true,
//                 list: result
//             });
//         });
//     },
//
//     post: (req, res) => {
//         let newCategory = new SubModel();
//         newCategory.text = req.body.text;
//         newCategory.value = req.body.value;
//         newCategory.type = req.body.type;
//         newCategory.save();
//         res.json({
//             success: true,
//             list: [newCategory]
//         })
//     },
//
//     delete: (req, res) => {
//         SubModel.find(req.body).remove((err, result) => {
//             if (err) return res.send({
//                 error: true
//             });
//             res.send({
//                 success: true
//             });
//         });
//     }
// };