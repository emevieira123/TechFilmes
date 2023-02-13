import img404 from '../../../assets/404.png';

export function PageNotFound() {
  return (
    <div style={Style}>
      <img
        style={{ width: '30%' }}
        src={img404}
        alt="Pagina não existe"
      />
    </div>
  )
}

const Style = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
