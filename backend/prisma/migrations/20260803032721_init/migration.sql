-- CreateTable
CREATE TABLE "Utilisateur" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "motDePasseHash" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "dateCreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Galerie" (
    "id" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "dateCreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "utilisateurId" TEXT NOT NULL,

    CONSTRAINT "Galerie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" TEXT NOT NULL,
    "nomFichier" TEXT NOT NULL,
    "cheminFichier" TEXT NOT NULL,
    "tailleOctets" INTEGER NOT NULL,
    "formatMime" TEXT NOT NULL,
    "dateUpload" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "galerieId" TEXT NOT NULL,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Galerie_slug_key" ON "Galerie"("slug");

-- AddForeignKey
ALTER TABLE "Galerie" ADD CONSTRAINT "Galerie_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_galerieId_fkey" FOREIGN KEY ("galerieId") REFERENCES "Galerie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
