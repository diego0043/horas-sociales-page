export const MessageHome = () => {
  const scrollDown = () => {
    const element = document.getElementById('games-home-red');
    element.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <>
        <h1 className="title-home">¡Bienvenido a una <span className="text-resalt-home flash-animation">experiencia</span> educativa única: tu aula <span className="text-resalt-home">virtual!</span></h1>
        <h2 className="subtitle-home">Explora un mundo de aprendizaje digital diseñado para estudiantes de cuarto grado</h2>
        <button onClick={scrollDown} className="btn btn-danger btn-lg btn-block btn-home">Comenzar</button>
    </>
  )
}
