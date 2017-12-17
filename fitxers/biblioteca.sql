-- MySQL Script generated by MySQL Workbench
-- jue 23 nov 2017 17:12:26 CET
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema biblioteca
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema biblioteca
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `biblioteca` DEFAULT CHARACTER SET utf8 ;
USE `biblioteca` ;

-- -----------------------------------------------------
-- Table `biblioteca`.`Autors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`Autors` (
  `ID_Autor` INT NOT NULL AUTO_INCREMENT,
  `Nom` VARCHAR(70) NOT NULL,
  `Cognom` VARCHAR(70) NOT NULL,
  `Nacionalitat` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID_Autor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`Usuaris`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`Usuaris` (
  `ID_Usuari` INT NOT NULL AUTO_INCREMENT,
  `DNI` INT NOT NULL,
  `Nom` VARCHAR(70) NOT NULL,
  `Cognom` VARCHAR(70) NOT NULL,
  `Adreca` VARCHAR(155) NOT NULL,
  `Poblacio` VARCHAR(70) NOT NULL,
  `Provincia` VARCHAR(70) NOT NULL,
  `Nacionalitat` VARCHAR(45) NULL,
  `Adreca_electronica` VARCHAR(155) NOT NULL,
  `Telefon` INT NULL,
  `Data_naixement` DATE NOT NULL,
  PRIMARY KEY (`ID_Usuari`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`Llibres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`Llibres` (
  `ID_Llibres` INT NOT NULL AUTO_INCREMENT,
  `Titol` VARCHAR(155) NOT NULL,
  `Numero_edicio` INT NOT NULL,
  `Lloc_publicacio` VARCHAR(70) NOT NULL,
  `Editorial` VARCHAR(70) NOT NULL,
  `Any_edicio` DATE NOT NULL,
  `ISBN` VARCHAR(45) NOT NULL,
  `Quantitat_exemplars` INT NOT NULL,
  PRIMARY KEY (`ID_Llibres`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`Exemplars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`Exemplars` (
  `ID_Exemplar` INT NOT NULL AUTO_INCREMENT,
  `ID_Llibres` INT NOT NULL,
  PRIMARY KEY (`ID_Exemplar`),
  INDEX `ID_Llibres_idx` (`ID_Llibres` ASC),
  CONSTRAINT `ID_Llibres`
    FOREIGN KEY (`ID_Llibres`)
    REFERENCES `biblioteca`.`Llibres` (`ID_Llibres`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`Prestecs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`Prestecs` (
  `ID_Prestec` INT NOT NULL AUTO_INCREMENT,
  `Data_sortida` DATE NOT NULL,
  `Data_maxima_devolucio` DATE NOT NULL,
  `Data_real_devolucio` DATE NOT NULL,
  `Numero_prestecs` INT NOT NULL,
  `Maxim_prestecs` TINYINT NOT NULL,
  `Exemplar` INT NOT NULL,
  `Usuari` INT NOT NULL,
  PRIMARY KEY (`ID_Prestec`),
  INDEX `ID_Exemplar_idx` (`Exemplar` ASC),
  INDEX `ID_Usuari_idx` (`Usuari` ASC),
  CONSTRAINT `ID_Exemplar`
    FOREIGN KEY (`Exemplar`)
    REFERENCES `biblioteca`.`Exemplars` (`ID_Exemplar`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ID_Usuari`
    FOREIGN KEY (`Usuari`)
    REFERENCES `biblioteca`.`Usuaris` (`ID_Usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`Generes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`Generes` (
  `ID_Genere` INT NOT NULL AUTO_INCREMENT,
  `Nom` VARCHAR(70) NOT NULL,
  `Descripcio` VARCHAR(255) NULL,
  PRIMARY KEY (`ID_Genere`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`Relacio_llibres_autors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`Relacio_llibres_autors` (
  `ID_Relaciola` INT NOT NULL AUTO_INCREMENT,
  `Autor` INT NOT NULL,
  `Llibres` INT NOT NULL,
  PRIMARY KEY (`ID_Relaciola`),
  INDEX `ID_Llibre_idx` (`Llibres` ASC),
  INDEX `Autor_idx` (`Autor` ASC),
  CONSTRAINT `Autor`
    FOREIGN KEY (`Autor`)
    REFERENCES `biblioteca`.`Autors` (`ID_Autor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ID_Llibre`
    FOREIGN KEY (`Llibres`)
    REFERENCES `biblioteca`.`Llibres` (`ID_Llibres`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`Relacio_llibres_generes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`Relacio_llibres_generes` (
  `ID_Relaciolg` INT NOT NULL AUTO_INCREMENT,
  `Llibres` INT NOT NULL,
  `Genere` INT NOT NULL,
  PRIMARY KEY (`ID_Relaciolg`),
  INDEX `ID_Genere_idx` (`Genere` ASC),
  INDEX `ID_Llibre_idx` (`Llibres` ASC),
  CONSTRAINT `ID_Lli`
    FOREIGN KEY (`Llibres`)
    REFERENCES `biblioteca`.`Llibres` (`ID_Llibres`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ID_Gen`
    FOREIGN KEY (`Genere`)
    REFERENCES `biblioteca`.`Generes` (`ID_Genere`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;