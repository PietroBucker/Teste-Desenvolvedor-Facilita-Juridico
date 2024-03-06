import api from './api';

const PORT = process.env.PORT || 3001;

api.listen(PORT, () => console.log(`Server running on port ${PORT}`));