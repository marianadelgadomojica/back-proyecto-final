import docClient from '../configs/database.config.js'
import { config } from '../configs/database.config.js'
export class DataControllers {
    async getAll(req, res) {

        try {
            const params = {
                TableName: config.aws_table_name
            };


            const data = await docClient.scan(params).promise();

            const items = (data.Items).sort((a, b) => b.seqno - a.seqno);
            const datosTemp = [];

            items.map(e => {
                datosTemp.push({
                    seqno: e.seqno,
                    ascii: (hex2a(e.data)).split('-'),
                    data: e.data
                })
            });

            function hex2a(hexx) {
                var hex = hexx.toString();//force conversion
                var str = '';
                for (var i = 0; i < hex.length; i += 2)
                    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));

                return str;
            }

            return res.status(200).json({ data: datosTemp })

        } catch (error) {

            return res.status(400).json({ error: error })

        }
    }
}