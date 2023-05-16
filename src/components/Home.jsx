//import { Home } from 'react'
import './Home.css'

export const Home = () => {
    return (
        <nav class="navbar">
        <h1 class="brand">Фотограф</h1>
        <div class="toggle-btn">
            <span></span>
            <span></span>
        </div>
        <ul class="links-container">
            <li class="links-item"><a href="#1" class="link active">Главная</a></li>
            <li class="links-item"><a href="#project-section" class="link">Проекты</a></li>
            <li class="links-item"><a href="#about-section" class="link">о нас</a></li>
            <li class="links-item"><a href="#contact-section" class="link">Контакт</a></li>
        </ul>
    </nav>
    
    
    )
}
      