
const userRoutes = (app, fs) => {
    const dataPath = 'src/data/employees.json';

    const readFile = (
        callback,
        returnJson = false,
        filePath = dataPath,
        encoding = 'utf8'
    ) => {
            fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }
            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (
        fileData,
        callback,
        filePath = dataPath,
        encoding = 'utf8'
        ) => {
            fs.writeFile(filePath, fileData, encoding, err => {
            if (err) {
                throw err;
            }
            callback();
            });
        };

    app.get('/employee', (req, res) => {
        readFile(data => {
            res.send(data);
        }, true);
    });

    app.get('/employee/:id', (req, res) => {
        readFile(data => {
            const newEmployeeId = req.params['id'];
            res.send(data.data[newEmployeeId]);
        }, true);
    });

    app.put('/employee/update/:id', (req, res) => {
        readFile(data => {
            const newEmployeeId = Number(req.params["id"]);
            data[newEmployeeId] = {
                ...data[newEmployeeId],
                status: req.body.status
            };
            writeFile(JSON.stringify(data, null, 2), () => {
                res.send(data[newEmployeeId]);
            });
        },
        true);
    });

    app.post('/employee/create', (req, res) => {
        readFile(data => {
            const newEmployeeId = req.body.id;
            data[newEmployeeId] = req.body;
            writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send(data[newEmployeeId]);
        }, dataPath);
        }, true, dataPath);
    });
}
module.exports = userRoutes;