package com.example.web_ep.DB;

import jakarta.annotation.Resource;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.PersistenceUnit;
import jakarta.transaction.UserTransaction;

import java.util.List;

public class RepUsers implements IRepUsers{
    @PersistenceUnit(unitName = "local_pg_test_PersistenceUnit")
    private EntityManagerFactory entityManagerFactory;

    @Resource
    private UserTransaction userTransaction;

    @Override
    public void signUpUser(String login, String password){

        EntityManager entityManager;
        try {
            entityManager = entityManagerFactory.createEntityManager();
        }
        catch (Exception e) {
            try {
                throw new Exception("Error while Entity Manager initializing: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }

        try {
            userTransaction.begin();
            entityManager.joinTransaction();

            EUser user = new EUser();
            user.setLogin(login);
            user.setPassword(password);

            entityManager.persist(user);

            userTransaction.commit();

        }
        catch (Exception e) {
            try {
                throw new Exception("Error while JPA operating: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
    }

    @Override
    public Boolean getUserRegistr(String login) {

        EntityManager entityManager;
        try {
            entityManager = entityManagerFactory.createEntityManager();
        }
        catch (Exception e) {
            try {
                throw new Exception("Error while Entity Manager initializing: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
        try {
            userTransaction.begin();
            entityManager.joinTransaction();

            List<EUser> users = entityManager.createQuery("SELECT p FROM EUser p WHERE p.Login ='" + login + "'", EUser.class).getResultList();

            userTransaction.commit();

            System.out.println(!users.isEmpty());

            return users.size() == 1;

        }
        catch (Exception e) {
            try {
                throw new Exception("Error while JPA operating: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
    }

    @Override
    public Boolean getUserAuth(String login, String password) {

        EntityManager entityManager;
        try {
            entityManager = entityManagerFactory.createEntityManager();
        }
        catch (Exception e) {
            try {
                throw new Exception("Error while Entity Manager initializing: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
        try {
            userTransaction.begin();
            entityManager.joinTransaction();

            List<EUser> users = entityManager.createQuery("SELECT p FROM EUser p WHERE p.Login ='" + login + "' AND p.Password ='" + password + "'", EUser.class).getResultList();

            userTransaction.commit();

            System.out.println(!users.isEmpty());

            return users.size() == 1;

        }
        catch (Exception e) {
            try {
                throw new Exception("Error while JPA operating: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
    }

    @Override
    public Integer GetId(String login) {

        EntityManager entityManager;
        try {
            entityManager = entityManagerFactory.createEntityManager();
        }
        catch (Exception e) {
            try {
                throw new Exception("Error while Entity Manager initializing: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
        try {
            userTransaction.begin();
            entityManager.joinTransaction();

            List<EUser> users = entityManager.createQuery("SELECT p FROM EUser p WHERE p.Login ='" + login + "'", EUser.class).getResultList();

            userTransaction.commit();

            return users.get(0).getID();

        }
        catch (Exception e) {
            try {
                throw new Exception("Error while JPA operating: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
    }
}
