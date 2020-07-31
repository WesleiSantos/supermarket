-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema superclick
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `superclick` ;

-- -----------------------------------------------------
-- Schema superclick
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `superclick` DEFAULT CHARACTER SET utf8 ;
USE `superclick` ;

-- -----------------------------------------------------
-- Table `superclick`.`type_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superclick`.`type_user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `superclick`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superclick`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `surname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(60) NOT NULL,
  `id_type_user` INT NOT NULL DEFAULT (1),
  `remember_token` VARCHAR(100) DEFAULT NULL, 
  PRIMARY KEY (`id`,`id_type_user`),
  INDEX `fk_user_1_idx` (`id_type_user` ASC) ,
  CONSTRAINT `fk_user_1`
    FOREIGN KEY (`id_type_user`)
    REFERENCES `superclick`.`type_user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `superclick`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superclick`.`address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `street` VARCHAR(50) NULL,
  `number` INT NULL,
  `district` VARCHAR(50) NULL,
  `cep` VARCHAR(15) NOT NULL,
  `city` VARCHAR(50) NULL,
  `complement` VARCHAR(100) NULL,
  `id_user` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_address_1`
    FOREIGN KEY (`id_user`)
    REFERENCES `superclick`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `superclick`.`telephone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superclick`.`telephone` (
  `id_user` INT NOT NULL,
  `num_telephone` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id_user`, `num_telephone`),
  CONSTRAINT `fk_telephone_1`
    FOREIGN KEY (`id_user`)
    REFERENCES `superclick`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `superclick`.`permission`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superclick`.`permission` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `superclick`.`type_user_permission`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superclick`.`type_user_permission` (
  `id_type_user` INT NOT NULL,
  `id_permission` INT NOT NULL,
  PRIMARY KEY (`id_permission`, `id_type_user`),
  CONSTRAINT `fk_type_user_permission_1`
    FOREIGN KEY (`id_type_user`)
    REFERENCES `superclick`.`type_user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_type_user_permission_2`
    FOREIGN KEY (`id_type_user`)
    REFERENCES `superclick`.`permission` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `superclick`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superclick`.`category` (
  `id` INT NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `description_UNIQUE` (`description` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `superclick`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superclick`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description_product` VARCHAR(100) NOT NULL,
  `unity_sale` Enum("UN", "KG", "MG", "G", "L") NOT NULL,
  `value_unitary` FLOAT NOT NULL,
  `category` INT NOT NULL,
  `percentage_discount` FLOAT NULL DEFAULT 0,
  `code` VARCHAR(45) NULL,
  `description_measure` VARCHAR(60) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_product_1_idx` (`category` ASC) ,
  CONSTRAINT `fk_product_1`
    FOREIGN KEY (`category`)
    REFERENCES `superclick`.`category` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `superclick`.`payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superclick`.`payment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `superclick`.`supermarket_cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superclick`.`supermarket_cart` (
  `id_user` INT NOT NULL,
  `id_product` INT NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`id_user`, `id_product`),
  INDEX `fk_supermarket_cart_2_idx` (`id_product` ASC) ,
  CONSTRAINT `fk_supermarket_cart_1`
    FOREIGN KEY (`id_user`)
    REFERENCES `superclick`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_supermarket_cart_2`
    FOREIGN KEY (`id_product`)
    REFERENCES `superclick`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `superclick`.`order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superclick`.`order` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date_order` DATE NOT NULL DEFAULT CURRENT_DATE,
  `time_order` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `quantity_products` INT NOT NULL,
  `value_total` FLOAT NOT NULL,
  `change_of_money` FLOAT NOT NULL,
  `active_flag` TINYINT NOT NULL,
  `status` Enum("processando", "a caminho", "concluido", "cancelado") NOT NULL,
  `note` VARCHAR(50) NULL,
  `id_type_payment` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_order_1_idx` (`id_type_payment` ASC) ,
  CONSTRAINT `fk_order_1`
    FOREIGN KEY (`id_type_payment`)
    REFERENCES `superclick`.`payment` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `superclick`.`order_product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superclick`.`order_product` (
  `id_order` INT NOT NULL,
  `id_product` INT NOT NULL,
  PRIMARY KEY (`id_order`, `id_product`),
  INDEX `fk_order_product_2_idx` (`id_product` ASC) ,
  CONSTRAINT `fk_order_product_1`
    FOREIGN KEY (`id_order`)
    REFERENCES `superclick`.`order` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_product_2`
    FOREIGN KEY (`id_product`)
    REFERENCES `superclick`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `superclick`.`client_order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superclick`.`client_order` (
  `id_client` INT NOT NULL,
  `id_order` INT NOT NULL,
  PRIMARY KEY (`id_client`, `id_order`),
  INDEX `fk_client_order_2_idx` (`id_order` ASC) ,
  CONSTRAINT `fk_client_order_1`
    FOREIGN KEY (`id_client`)
    REFERENCES `superclick`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_client_order_2`
    FOREIGN KEY (`id_order`)
    REFERENCES `superclick`.`order` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `superclick`.`image`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superclick`.`image` (
  `id_product` INT NOT NULL,
  `name_image` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id_product`, `name_image`),
  CONSTRAINT `fk_image_1`
    FOREIGN KEY (`id_product`)
    REFERENCES `superclick`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `superclick`.`promotion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superclick`.`promotion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NOT NULL,
  `image` BLOB NOT NULL,
  `flag_active` TINYINT NOT NULL,
  `name_promotion` VARCHAR(45) NOT NULL,
  `value_discount` FLOAT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_promotion_UNIQUE` (`name_promotion` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `superclick`.`product_promotion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superclick`.`product_promotion` (
  `id_product` INT NOT NULL,
  `id_promotion` INT NOT NULL,
  PRIMARY KEY (`id_product`, `id_promotion`),
  INDEX `fk_product_promotion_2_idx` (`id_promotion` ASC) ,
  CONSTRAINT `fk_product_promotion_1`
    FOREIGN KEY (`id_product`)
    REFERENCES `superclick`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_promotion_2`
    FOREIGN KEY (`id_promotion`)
    REFERENCES `superclick`.`promotion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `superclick`.`delivery`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superclick`.`delivery` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `time_delivery` TIME NOT NULL,
  `tariff_delivery` FLOAT NOT NULL,
  `id_order` INT NOT NULL,
  `client_id` INT NOT NULL,
  PRIMARY KEY (`id`, `client_id`, `id_order`),
  INDEX `fk_delivery_1_idx` (`id_order` ASC) ,
  INDEX `fk_delivery_2_idx` (`client_id` ASC) ,
  CONSTRAINT `fk_delivery_1`
    FOREIGN KEY (`id_order`)
    REFERENCES `superclick`.`order` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_delivery_2`
    FOREIGN KEY (`client_id`)
    REFERENCES `superclick`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `superclick`.`log`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superclick`.`log` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL DEFAULT CURRENT_DATE,
  `time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `description` VARCHAR(60) NOT NULL,
  `id_adm` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_LOG_1_idx` (`id_adm` ASC) ,
  CONSTRAINT `fk_LOG_1`
    FOREIGN KEY (`id_adm`)
    REFERENCES `superclick`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `superclick`.`stock`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superclick`.`stock` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`id`, `product_id`),
  INDEX `fk_stock_1_idx` (`product_id` ASC) ,
  CONSTRAINT `fk_stock_1`
    FOREIGN KEY (`product_id`)
    REFERENCES `superclick`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- date for table `superclick`.`type_user`
-- -----------------------------------------------------
START TRANSACTION;
USE `superclick`;
INSERT INTO `superclick`.`type_user` (`id`, `type`) VALUES (1, 'cliente');
INSERT INTO `superclick`.`type_user` (`id`, `type`) VALUES (2, 'funcionario');
INSERT INTO `superclick`.`type_user` (`id`, `type`) VALUES (3, 'administrador');

COMMIT;


-- -----------------------------------------------------
-- date for table `superclick`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `superclick`;
INSERT INTO `superclick`.`user` (`id`, `name`, `surname`, `email`, `password`, `id_type_user`) VALUES (1, 'Weslei', 'Santos', 'weslei200', '$2y$10$IESFgoXAb8XPKvh770mH0OjjWzFkDufkhuV3X7lUjgK2Vsm1/qm4S', 3);

COMMIT;


-- -----------------------------------------------------
-- date for table `superclick`.`address`
-- -----------------------------------------------------
START TRANSACTION;
USE `superclick`;
INSERT INTO `superclick`.`address` (`id`, `street`, `number`, `district`, `cep`, `city`, `complement`, `id_user`) VALUES (1, 'Braço forte', 20, 'Asa Branca', '44046800', 'Feira De Santana', 'Próximo igreja Batista', 1);
-- INSERT INTO `superclick`.`address` (`id`, `street`, `number`, `district`, `cep`, `city`, `complement`, `id_user`) VALUES (2, 'Um', 86, 'Pampalona', '44789900', 'Feira De Santana', NULL, 2);
-- INSERT INTO `superclick`.`address` (`id`, `street`, `number`, `district`, `cep`, `city`, `complement`, `id_user`) VALUES (3, 'andarai', 89, 'Campo Limpo', '44536899', 'Feira De Santana', 'Próximo ao CRAS', 3);

COMMIT;


-- -----------------------------------------------------
-- date for table `superclick`.`telephone`
-- -----------------------------------------------------
START TRANSACTION;
USE `superclick`;
INSERT INTO `superclick`.`telephone` (`id_user`, `num_telephone`) VALUES (1, '75982823518');

COMMIT;


-- -----------------------------------------------------
-- date for table `superclick`.`permission`
-- -----------------------------------------------------
START TRANSACTION;
USE `superclick`;
INSERT INTO `superclick`.`permission` (`id`, `description`) VALUES (1, 'cadastro de produtos');
INSERT INTO `superclick`.`permission` (`id`, `description`) VALUES (2, 'atualizar produtos');
INSERT INTO `superclick`.`permission` (`id`, `description`) VALUES (3, 'gerenciar promoção');
INSERT INTO `superclick`.`permission` (`id`, `description`) VALUES (4, 'log do sistema');
INSERT INTO `superclick`.`permission` (`id`, `description`) VALUES (5, 'gerenciar pedidos');
INSERT INTO `superclick`.`permission` (`id`, `description`) VALUES (6, 'gerenciar usuarios');

COMMIT;


-- -----------------------------------------------------
-- date for table `superclick`.`type_user_permission`
-- -----------------------------------------------------
START TRANSACTION;
USE `superclick`;
INSERT INTO `superclick`.`type_user_permission` (`id_type_user`, `id_permission`) VALUES (2, 1);
INSERT INTO `superclick`.`type_user_permission` (`id_type_user`, `id_permission`) VALUES (2, 2);
INSERT INTO `superclick`.`type_user_permission` (`id_type_user`, `id_permission`) VALUES (2, 3);
INSERT INTO `superclick`.`type_user_permission` (`id_type_user`, `id_permission`) VALUES (2, 5);
INSERT INTO `superclick`.`type_user_permission` (`id_type_user`, `id_permission`) VALUES (3, 1);
INSERT INTO `superclick`.`type_user_permission` (`id_type_user`, `id_permission`) VALUES (3, 2);
INSERT INTO `superclick`.`type_user_permission` (`id_type_user`, `id_permission`) VALUES (3, 3);
INSERT INTO `superclick`.`type_user_permission` (`id_type_user`, `id_permission`) VALUES (3, 5);
INSERT INTO `superclick`.`type_user_permission` (`id_type_user`, `id_permission`) VALUES (3, 4);

COMMIT;


-- -----------------------------------------------------
-- date for table `superclick`.`category`
-- -----------------------------------------------------
START TRANSACTION;
USE `superclick`;
INSERT INTO `superclick`.`category` (`id`, `description`) VALUES (1, 'açougue');
INSERT INTO `superclick`.`category` (`id`, `description`) VALUES (2, 'alimentos básicos');
INSERT INTO `superclick`.`category` (`id`, `description`) VALUES (3, 'bebidas');
INSERT INTO `superclick`.`category` (`id`, `description`) VALUES (4, 'bomboniere');
INSERT INTO `superclick`.`category` (`id`, `description`) VALUES (5, 'cosméticos');
INSERT INTO `superclick`.`category` (`id`, `description`) VALUES (6, 'enlatados');
INSERT INTO `superclick`.`category` (`id`, `description`) VALUES (7, 'higiêne');
INSERT INTO `superclick`.`category` (`id`, `description`) VALUES (8, 'hortifrute');
INSERT INTO `superclick`.`category` (`id`, `description`) VALUES (9, 'massa');
INSERT INTO `superclick`.`category` (`id`, `description`) VALUES (10, 'padaria');
INSERT INTO `superclick`.`category` (`id`, `description`) VALUES (11, 'produtos de limpeza');
INSERT INTO `superclick`.`category` (`id`, `description`) VALUES (12, 'temperos');
INSERT INTO `superclick`.`category` (`id`, `description`) VALUES (13, 'utensílios domésticos');
COMMIT;


-- -----------------------------------------------------
-- date for table `superclick`.`product`
-- -----------------------------------------------------
START TRANSACTION;
USE `superclick`;
INSERT INTO `superclick`.`product` (`id`, `description_product`, `unity_sale`, `value_unitary`, `category`, `percentage_discount`, `code`, `description_measure`) VALUES (1, 'açucar', 'UN', 3.99, 1, 0, NULL, '1 Kg');
INSERT INTO `superclick`.`product` (`id`, `description_product`, `unity_sale`, `value_unitary`, `category`, `percentage_discount`, `code`, `description_measure`) VALUES (2, 'arroz', 'UN', 4.50, 1, 0.010, NULL, '1 Kg');
INSERT INTO `superclick`.`product` (`id`, `description_product`, `unity_sale`, `value_unitary`, `category`, `percentage_discount`, `code`, `description_measure`) VALUES (3, 'feijão', 'UN', 10.40, 1, 0.05, NULL, '1 Kg');
INSERT INTO `superclick`.`product` (`id`, `description_product`, `unity_sale`, `value_unitary`, `category`, `percentage_discount`, `code`, `description_measure`) VALUES (4, 'calabresa de frango', 'KG', 23.00, 2, 0, NULL, '1 Kg');
INSERT INTO `superclick`.`product` (`id`, `description_product`, `unity_sale`, `value_unitary`, `category`, `percentage_discount`, `code`, `description_measure`) VALUES (5, 'caixa de bombom garoto', 'UN', 9.99, 2, 0, NULL, '');
INSERT INTO `superclick`.`product` (`id`, `description_product`, `unity_sale`, `value_unitary`, `category`, `percentage_discount`, `code`, `description_measure`) VALUES (6, 'cerveja cristal', 'L', 5.99, 4, 0, NULL, '1 litro');

COMMIT;


-- -----------------------------------------------------
-- date for table `superclick`.`payment`
-- -----------------------------------------------------
START TRANSACTION;
USE `superclick`;
INSERT INTO `superclick`.`payment` (`id`, `description`) VALUES (1, 'dinheiro');
INSERT INTO `superclick`.`payment` (`id`, `description`) VALUES (2, 'cartão');

COMMIT;


-- -----------------------------------------------------
-- date for table `superclick`.`supermarket_cart`
-- -----------------------------------------------------
START TRANSACTION;
USE `superclick`;
INSERT INTO `superclick`.`supermarket_cart` (`id_user`, `id_product`, `quantity`) VALUES (1, 1, 3);
INSERT INTO `superclick`.`supermarket_cart` (`id_user`, `id_product`, `quantity`) VALUES (1, 2, 4);
INSERT INTO `superclick`.`supermarket_cart` (`id_user`, `id_product`, `quantity`) VALUES (1, 4, 2);
INSERT INTO `superclick`.`supermarket_cart` (`id_user`, `id_product`, `quantity`) VALUES (1, 5, 2);
INSERT INTO `superclick`.`supermarket_cart` (`id_user`, `id_product`, `quantity`) VALUES (1, 6, 5);

COMMIT;


-- -----------------------------------------------------
-- date for table `superclick`.`order`
-- -----------------------------------------------------
START TRANSACTION;
USE `superclick`;
INSERT INTO `superclick`.`order` (`id`, `date_order`, `quantity_products`, `value_total`, `change_of_money`, `active_flag`, `status`, `note`, `id_type_payment`) VALUES (1, '2020-03-03', 10, 100.09, 10.10, 0, 'concluido', 'sacolas plásticas por gentileza', 1);
INSERT INTO `superclick`.`order` (`id`, `date_order`, `quantity_products`, `value_total`, `change_of_money`, `active_flag`, `status`, `note`, `id_type_payment`) VALUES (2, '2020-03-03', 5, 54.90, 0, 0, 'concluido', NULL, 1);
INSERT INTO `superclick`.`order` (`id`, `date_order`, `quantity_products`, `value_total`, `change_of_money`, `active_flag`, `status`, `note`, `id_type_payment`) VALUES (3, '2020-04-10', 20, 302.90, 0, 0, 'cancelado', NULL, 1);
INSERT INTO `superclick`.`order` (`id`, `date_order`,`quantity_products`, `value_total`, `change_of_money`, `active_flag`, `status`, `note`, `id_type_payment`) VALUES (4, '2020-04-19', 30, 500.89, 0, 1, 'processando', NULL, 1);

COMMIT;


-- -----------------------------------------------------
-- date for table `superclick`.`order_product`
-- -----------------------------------------------------
START TRANSACTION;
USE `superclick`;
INSERT INTO `superclick`.`order_product` (`id_order`, `id_product`) VALUES (4, 1);
INSERT INTO `superclick`.`order_product` (`id_order`, `id_product`) VALUES (4, 2);
INSERT INTO `superclick`.`order_product` (`id_order`, `id_product`) VALUES (4, 3);

COMMIT;

