package finaltes.md4.model;

import javax.persistence.*;

@Entity
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double area;
    private  int population;
    private int GDP;
    private String description;

    @ManyToOne(fetch = FetchType.EAGER)
    private Country country;

    public City() {
    }

    public City(String name, double area, int population, int DGP, String description, Country country) {
        this.name = name;
        this.area = area;
        this.population = population;
        this.GDP = DGP;
        this.description = description;
        this.country = country;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getArea() {
        return area;
    }

    public void setArea(double area) {
        this.area = area;
    }

    public int getPopulation() {
        return population;
    }

    public void setPopulation(int population) {
        this.population = population;
    }

    public int getDGP() {
        return GDP;
    }

    public void setDGP(int DGP) {
        this.GDP = DGP;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }
}
