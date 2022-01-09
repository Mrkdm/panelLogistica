const routes = {
     home: '/',
     login: '/login',
     upload: '/upload',
     casas: '/casas',
     account: '/account',
     casa: (idProp) => (idProp ?`/casas/:${idProp}`: '/casas/:id')
};

export default routes