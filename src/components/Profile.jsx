export default function Profile({image, name, title, isNew}) {
  return (
    <div className='profile'>
      <img 
        className='photo'
        src={image}
        alt='avatar'
      />
      {/* isNew = true일때만 span 태그 보여주기 */}
      {isNew && <span className='new'>New</span>}
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  )
}