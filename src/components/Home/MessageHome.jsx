export const MessageHome = () => {
  const scrollDown = () => {
    const element = document.getElementById('games-home-red');
    element.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <>
        <h1 className="title-home">¡Bienvenido a una experiencia educativa única: tu aula virtual!</h1>
        <h2 className="subtitle-home">Explora un mundo de aprendizaje digital diseñado para estudiantes de cuarto grado</h2>
        <button onClick={scrollDown} className="btn btn-danger btn-lg btn-block btn-home">Comenzar</button>
    </>
  )
}
