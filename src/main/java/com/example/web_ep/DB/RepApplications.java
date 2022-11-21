package com.example.web_ep.DB;

import com.example.web_ep.model.ObjectData.Application;
import jakarta.annotation.Resource;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.PersistenceUnit;
import jakarta.transaction.UserTransaction;

import java.util.ArrayList;
import java.util.List;

public class RepApplications implements IRepApplications {

    @PersistenceUnit(unitName = "local_pg_test_PersistenceUnit")
    private EntityManagerFactory entityManagerFactory;

    @Resource
    private UserTransaction userTransaction;

    @Override
    public void InsertApplication(Integer id_user, Integer applic_poz, String applic_topic, String applic_contact, String applic_comment) {

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

            EApplic applic = new EApplic();
            applic.setId_user(id_user);
            applic.setComment(applic_comment);
            applic.setContact(applic_contact);
            applic.setTopic(applic_topic);
            applic.setPoz(applic_poz);

            entityManager.persist(applic);

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
    public Integer GetPoz(Integer id_user) {

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

            List<EApplic> applics = entityManager.createQuery("SELECT p FROM EApplic p WHERE p.Id_user ='" + id_user + "'", EApplic.class).getResultList();

            userTransaction.commit();

            int n = 1;

            return n + applics.size();


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
    public void DeleteApplication(Integer id_application) {

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

            entityManager.createQuery("DELETE FROM EApplic p WHERE p.ID ='" + id_application + "'").executeUpdate();

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
    public ArrayList<Application> GetApplication(Integer id_user) {

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

        ArrayList<Application> a = new ArrayList<>();

        try {
            userTransaction.begin();
            entityManager.joinTransaction();

            List<EApplic> APPLICS = entityManager.createQuery("SELECT p FROM EApplic p", EApplic.class).getResultList();

            userTransaction.commit();

            for (EApplic APPLIC:
                    APPLICS) {
                Application applic = new Application();
                applic.setComment(APPLIC.getComment());
                applic.setContact(APPLIC.getContact());
                applic.setPoz(APPLIC.getPoz());
                applic.setTopic(APPLIC.getTopic());
                applic.setId(APPLIC.getID());
                applic.setId_user(APPLIC.getId_user());
                a.add(applic);
            }

        }
        catch (Exception e) {
            try {
                throw new Exception("Error while JPA operating: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
        return a;
    }

}
