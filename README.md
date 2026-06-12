# Jardim de Nos

Landing page romantica estatica feita com Next.js, TypeScript e Tailwind CSS.

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse:

```txt
http://127.0.0.1:3000/s/eu-e-meu-amor
```

O conteudo da surpresa fica em:

```txt
src/features/surprises/surprise.constants.ts
```

As fotos locais ficam em:

```txt
public/media/eu-meu-amor/
```

## Variaveis

Somente a URL publica do site e usada para QR Code e compartilhamento.

```env
NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3000
```

Em producao, altere para a URL final da Vercel ou dominio proprio.

## Checks

```bash
npm run lint
npm run build
```

