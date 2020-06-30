import * as express from 'express';
import {Request, Response} from 'express';

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello TypeScript NodeJS!!!");
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
})