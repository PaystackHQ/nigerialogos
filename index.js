const express = require('express');

const app = express();

app.use(express.static(__dirname));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`server listening on port ${PORT}`);
});
