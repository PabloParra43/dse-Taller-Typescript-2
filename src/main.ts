import { series } from './data.js';

const tableBody: HTMLElement = document.getElementById('series-table-body')!;
const averageElement: HTMLElement = document.getElementById('average-seasons')!;

const detailsCard = document.getElementById('serie-details')!;
const serieImage = document.getElementById('serie-image') as HTMLImageElement;
const serieName = document.getElementById('serie-name')!;
const serieSynopsis = document.getElementById('serie-synopsis')!;
const serieUrl = document.getElementById('serie-url') as HTMLAnchorElement;

let totalSeasons = 0;

// Generar tabla y eventos
series.forEach((serie) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${serie.id}</td>
    <td><a href="#" class="serie-name" data-id="${serie.id}">${serie.name}</a></td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
  `;
  tableBody.appendChild(row);
  totalSeasons += serie.seasons;
});

// Mostrar promedio
const averageSeasons = (totalSeasons / series.length).toFixed(0);
averageElement.textContent = `Seasons average: ${averageSeasons}`;

console.log("main.ts está corriendo");

// Mostrar detalle al hacer clic
document.querySelectorAll('.serie-name').forEach((url) => {
  url.addEventListener('click', (e) => {
    e.preventDefault();
    const id = parseInt((e.target as HTMLElement).getAttribute('data-id')!);
    const serie = series.find(s => s.id === id)!;
 
    console.log("URL de imagen:", serie.image);
    serieImage.src = serie.image;
    serieImage.onerror = () => {
      console.error("La imagen no se pudo cargar:", serie.image);
    };
    serieImage.alt = `${serie.image}`;
    serieName.textContent = serie.name;
    serieSynopsis.textContent = serie.synopsis;
    serieUrl.href = serie.url;

    detailsCard.style.display = 'block';
  });
});